import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { StaticDatePicker, PickersDay } from '@mui/lab';
import { TextField, Checkbox, FormGroup, FormControlLabel, Box, CircularProgress, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import useFetch from 'use-http';
import { getYear, isSameDay, format, parseISO, isDate, subDays } from 'date-fns';
import { useHistory } from "react-router-dom";
import { HolidayDetails } from '../../components';
import { LocaleContext } from '../../contexts';
import { holidayLangs } from '../../utils';

export const Calendar = () => {

    // Custom classes for holidays in calendar widget
    const CustomPickersDay = styled(PickersDay, {
        shouldForwardProp: (prop) =>
        prop !== 'isPublicHoliday' && prop !== 'isNonPublicHoliday',
    })(({theme, isPublicHoliday, isNonPublicHoliday}) => ({
        ...(isPublicHoliday && {
            borderRadius: '50%',
            color: 'red',
            // color: theme.palette.common.white,
            '&:hover, &:focus': {
                backgroundColor: 'pink',
            },
        }),
        ...(isNonPublicHoliday && {
            borderRadius: '50%',
            color: 'blue',
            // color: theme.palette.common.white,
            '&:hover, &:focus': {
                backgroundColor: 'violet',
            },
        })
    }))

    // TODO - add navigation from link
    const {locale, setLocale} = useContext(LocaleContext);
    const history = useHistory();

    const [country, setCountry] = useState(history.location.state?.country);
    const code = country?.code;
    const name = country?.name;
    const langs = country?.languages;    
    
    const storageKey = `holidays_${name?.split(' ').join('_')}:${locale?.code}`;
    const nativeStorageKey = `native_holidays_${name?.split(' ').join('_')}`;    
    
    const options = {};

    const [date, setDate] = useState(new Date());
    const [holidays, setHolidays] = useState(JSON.parse(window.sessionStorage.getItem(storageKey)) || [])
    const [publicHolidays, setPublicHolidays] = useState([]);
    const [nonPublicHolidays, setNonPublicHolidays] = useState([]); 
    const [onlyPublic, setOnlyPublic] = useState(false)
    const [workday, setWorkday] = useState()
    const [holidaysNative, setHolidaysNative] = useState(JSON.parse(window.sessionStorage.getItem(nativeStorageKey)) || []);

    const holidayAPIKey = '9c50fecb-c3bd-4210-b92d-7492551bfaf6';
    const heroku = 'https://pure-earth-30421.herokuapp.com/';
    const holidayBaseUrl = heroku + 'https://holidayapi.com/v1/';

    const { get, response, loading, error } = useFetch(holidayBaseUrl, options);
    const { get: wdGet, response: wdResponse, loading: wdLoading } = useFetch(holidayBaseUrl)
    
    const publicRef = useRef()
    
    const apiLink = `https://holidayapi.com/countries/${code?.toLowerCase()}/${getYear(date)}`
    
    // Checking out native languages of the country to display native holiday name if available
    const nativeLangs = [];
    const hasNative = useMemo(() => {
        langs?.map((lang) => {
            holidayLangs.map((entry) => {
                if (Object.values(entry)[0] === lang) {
                    nativeLangs.push(lang)
                } else {
                    return false;
                }
            })
        })
        
    }, [langs])

    // Fetch country no history.location.state - e.g. came from link
    useEffect(() => {
        if(!country) {
            fetchFromPathname();
        }        
    }, [])

    const fetchFromPathname = async () => {
        if (!country) {
            let tempCode = history.location.pathname.slice(-2);
            console.log('COUNTRY: ', tempCode)
            await get(`countries?key=${holidayAPIKey}&country=${tempCode}`);
            if (response.ok) {
                history.push({pathname: history.location.pathname, state: {country: response.data.countries[0]}})
                window.location=window.location;
            } else {
            }
        } else {
            return;
        }
    }

    // Fetch the next workday date
    const fetchWorkday = async (workDate) => {
        // Substracting one day in case current date is a workday
        const dayForApi = subDays(workDate, 1);
        await wdGet (`workday?key=${holidayAPIKey}&country=${code?.toLowerCase()}&start=${format(dayForApi, 'yyyy-MM-dd')}&days=1`);
        if (wdResponse.ok) {
            setWorkday(wdResponse.data.workday);
            return wdResponse.data;
        }
    }
    
    // Check if given day is a member of a holidays object
    const oneOfDays = (day, days) => {
        for (let i = 0; i < days.length; i++) {
            if (isSameDay(day, days[i].date)) {
                return {is: true, day: days[i]};
            }
        }
    }

    // Custom classes for calendar widget
    const renderPickersDay = (pickDate, selectedDates, pickersDayProps) => {
        if (!date) {
            return <PickersDay{...pickersDayProps} />;         
        }

        const isPublicHoliday = oneOfDays(pickDate, publicHolidays);
        const isNonPublicHoliday = oneOfDays(pickDate, nonPublicHolidays);


        return (
                <CustomPickersDay
                    {...pickersDayProps}
                    isPublicHoliday={isPublicHoliday?.is}
                    isNonPublicHoliday={isNonPublicHoliday?.is && !onlyPublic}
                />
        )
    }

    // Fetch holidays for given country on mount
    useEffect(()=>{
        if (country) {
            // I'm using a year 2020 since it's the only one I have access to with a free acc
            const params = `?key=${holidayAPIKey}&country=${code}&year=2020&language=${locale?.code}`
            fetchHolidays(params);
        }
    },[country])

    // Check the next workday if date has changed
    useEffect(() => {
        if (country) {
            fetchWorkday(date);
        }
    },[date])

    // Separate public and non-public holidays when holidays had changed
    useEffect(() => {
        const tempPublicHolidays = [];
        const tempNonPublicHolidays = [];
        for (let i = 0; i < holidays?.length; i++) {
            const tempHoliday = holidays[i];
            if (!isDate(tempHoliday.date)) {
                tempHoliday.date = parseISO(tempHoliday.date);
            }

            if (tempHoliday.public === true) {
                tempPublicHolidays.push(tempHoliday);
            } else {
                tempNonPublicHolidays.push(tempHoliday)
            }
        }
        setPublicHolidays(tempPublicHolidays);
        setNonPublicHolidays(tempNonPublicHolidays);
    },[holidays])

    // Holidays fetch
    const fetchHolidays = async (params) => {
        if (!window.sessionStorage.getItem(storageKey)) {
            await get(`holidays${params}`);
            if (response.ok) { 
                const holidaysFromAPI = response.data?.holidays;
                window.sessionStorage.setItem(storageKey, JSON.stringify(holidaysFromAPI));
                setHolidays(holidaysFromAPI);
             } 

        } 
        if (!window.sessionStorage.getItem(nativeStorageKey) && nativeLangs) {
            const localHolidays = [];
            nativeLangs.map(async (lang) => {
                await get(`holidays?key=${holidayAPIKey}&country=${code}&year=2020&language=${lang}`);
                if (response.ok) {
                    localHolidays.push({[lang]: response.data?.holidays})
                    window.sessionStorage.setItem(nativeStorageKey, JSON.stringify(localHolidays));
                    setHolidaysNative(localHolidays);
                }
            })
            
        }
    }


    return (
        <>
            {error && <>
                <Typography variant='h3'>We have encountered an error:</Typography>
                <Typography variant='h4'>{error.message}</Typography>
                <Typography variant='h5'>Please try again later</Typography>
            </>}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <HolidayDetails
                        date={date} 
                        holiday={oneOfDays(date, holidays)} 
                        workday={workday} 
                        langs={langs} 
                        native={holidaysNative} 
                        loading={wdLoading} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='center' alignItems='center'sx={{height: 360}}>
                        {loading && <CircularProgress size={150}/>}                
                        {!loading && <StaticDatePicker
                            minDate={new Date(2019, 12, 1)}
                            maxDate={new Date(2020, 11, 31)}
                            displayStaticWrapperAs="desktop"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            renderDay={renderPickersDay}
                        />}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox
                                inputRef={publicRef}
                                onChange={(event, newValue) => {
                                    setOnlyPublic(newValue);
                                }} />} 
                            label="Show only public holidays" 
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Box component='div'>
                        Check out all the holidays in {name} for {getYear(date)} <a href={apiLink}>here</a>.
                    </Box>
                </Grid>
            </Grid>
            
            
            
        </>
    )
}

export default Calendar;