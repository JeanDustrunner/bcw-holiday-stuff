import React, { useEffect, useState, useContext, useMemo } from "react";
import { Autocomplete, TextField, Popper, Grid, Typography, CircularProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles } from "@mui/styles";
import { Flag } from '../../components'
import useFetch from 'use-http';
import './countries.scss';
import { LocaleContext } from "../../contexts";



const Countries = () => {

    // Custom styles for autocomplete
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                "& .MuiAutocomplete-listbox": {
                    borderBottom: '2px solid grey',
                    borderTop: '2px solid grey',
                    minHeight: '80vh',
                    color: "black",
                    fontSize: 18,
                    "& :hover": {
                    color: "red"
                    },
                }
            },
            textfield: {
                "& .MuiInputBase-input.MuiAutocomplete-input": {
                    color: "black",
                    fontSize: 18,
                    textAlign: 'center',
                },
            }
        })
    );

    const classes = useStyles();
    const heroku = 'https://pure-earth-30421.herokuapp.com/'
    const holidayAPIKey = '9c50fecb-c3bd-4210-b92d-7492551bfaf6'; 
    const holidayBaseUrl = heroku + 'https://holidayapi.com/v1/';
    const [countries, setCountries] = useState(JSON.parse(window.sessionStorage.getItem('countries')) || []); 
    const { get, post, response, loading, error } = useFetch(holidayBaseUrl);
    const history = useHistory();
    const { locale, setLocale } = useContext(LocaleContext);
    
    // Initializing array of translated countrynames after locale change
    const translatedCountries = require('i18n-iso-countries');
    translatedCountries.registerLocale(require(`i18n-iso-countries/langs/${locale?.code.substring(0,2)}.json`))
    const countryNames = useMemo(()=>{
        return translatedCountries.getNames(locale?.code.substring(0,2), {select: 'official'});
    }, [locale])

    // Fetch countries on mount
    useEffect(() => {
        fetchCountries();
    },[]);

    // Fetch countries from API
    const fetchCountries = async () => {
        if (!window.sessionStorage.getItem('countries')) {
            await get(`countries?key=${holidayAPIKey}`);
            if (response.ok) {
                setCountries(response.data.countries);
                window.sessionStorage.setItem('countries', JSON.stringify(response.data.countries))
            }
        } else {
            return;
        };
    }

    // Custom listbox for autocomplete
    const CustomPopper = (props) => {
        const classes = useStyles();
        return <Popper {...props} className={classes.root} placement="bottom" />;
    };

    // Redirect to holidays page after selecting country
    const countrySelect = (value) => {
        let path = '/app/holidays/' + value.code;
        history.push({pathname: path, state: {country: value}})
    }

    return(
        <>
            {error ? <>
                <Typography variant='h3'>We have encountered an error:</Typography>
                <Typography variant='h4'>{error.message}</Typography>
                <Typography variant='h5'>Please try again later</Typography>
            </> :
            loading ? <Grid container justifyContent='center' alignItems='center' sx={{height: '80vh'}}>
                <CircularProgress size={150}/>
            </Grid>  :
            <Grid container justifyContent='center' mt={2}>
                <Autocomplete
                    open
                    sx={{ maxWidth:800}}
                    id="country-select"
                    fullWidth
                    options={countries}
                    onChange={(event, newValue) => countrySelect(newValue)}
                    autoHighlight
                    PopperComponent={CustomPopper}
                    getOptionLabel={(option) => countryNames[option.code] || 'N/A'}
                    renderOption={(props, option) => (
                        <Grid
                            key={option.code}
                            container spacing={0} 
                            onClick={() => {countrySelect(option)}} 
                            justifyContent='space-between'
                            mt={{xs: 3, md: 1}} 
                            sx={{backgroundColor: 'whitesmoke', cursor: 'pointer'}}
                        >
                                <Grid item xs={1}>
                                    <Flag code={option.code} width={20} />
                                </Grid>
                                <Grid item xs={9}>
                                    {countryNames[option.code]}
                                </Grid>
                                <Grid item xs={2} md={1}>
                                    {option.codes?.['alpha-3'] || 'N/A'}
                                </Grid>
                        </Grid>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        }}
                        className={classes.textfield}
                        />
                    
                    )}
                />
            </Grid>}
        </>
    )
}

export default Countries;