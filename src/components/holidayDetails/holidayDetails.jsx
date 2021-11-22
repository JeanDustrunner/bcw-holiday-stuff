import React, { useContext, useState, useEffect } from 'react';
import { Grid, Typography, Chip, CircularProgress, Box } from '@mui/material';
import { LocaleContext } from '../../contexts';
import { format, isSameDay, parseISO } from 'date-fns';


export const HolidayDetails = ({date, holiday, workday, native, loading, flagCode}) => {

    const {locale, setLocale} = useContext(LocaleContext)
    const [chipColor, setChipColor] = useState('default')
    const [chipLabel, setChipLabel] = useState(<CircularProgress color='inherit' size={30} />)
   
    useEffect(() => {
        if (loading) {
            setChipColor('default');
            setChipLabel(<CircularProgress color='inherit' size={30} />)
        } else {
            if (isSameDay(parseISO(workday?.date), date)) {
                setChipColor('success');
                setChipLabel('Workday')
            } else {
                setChipColor('warning');
                setChipLabel(`Next workday: ${workday?.date}`)
            }
        }
    }, [loading, workday]);

    
    
    const oneOfDays = (day, holidays) => {
        let is = false;
        let days = [];
        for (let i = 0; i < holidays.length; i++) {
            if (isSameDay(day, parseISO(holidays[i].date))) {
                is = true;
                days.push(holidays[i]);
            }
        }
        return {is: is, days: days};
    }

    return (
        <>
            <Grid container spacing={0} justifyContent={{xs:'space-between', md: 'flex-start'}} mt={2} >
                <Grid  item xs={5} sm={4} md={3}>
                    <Typography variant='h5' gutterBottom mr={2} sx={{minWidth: 200}}>
                        {`${format(date, 'ccc, do MMMM', {locale: locale})}`}
                    </Typography>
                    <Chip
                        sx={{width: 180}}
                        size='big'
                        color={chipColor}
                        label={chipLabel}
                    />
                </Grid>
                <Grid item xs={9} justifyContent='flex-end'>
                    {holiday.days.map((day, index) => {
                        return (
                            <Box component='div' key={index}>
                                {day.public ? <Typography variant='h4' gutterBottom sx={{color: 'red'}}>
                                    {day.name && `${day.name}`}                                    
                                </Typography> :
                                <Typography variant='h4' gutterBottom>
                                    {day.name && `${day.name}`}                                    
                                </Typography>}
                                {native && <Typography variant='subtitle2' display='block' gutterBottom mr={1}>                                     
                                    {native.map((lang, index0) => {
                                        if (Object.keys(lang)[0] === locale?.code) {
                                            return false;
                                        }
                                        const nativeHoliday = oneOfDays(date, Object.values(lang)[0])                                        
                                        return (  
                                            <Box component='span' key={index0}>{nativeHoliday?.days[index]?.name}</Box>
                                        )
                                    })}
                                </Typography>} 
                            </Box>
                        )
                        
                    })}
                    
                </Grid>                
            </Grid>
        </>
    )
}

export default HolidayDetails;