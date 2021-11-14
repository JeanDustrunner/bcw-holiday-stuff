import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { Flag } from '../'
import { LocaleContext } from '../../contexts';

const SingleCountry = ({country}) => {
    const {locale, setLocale} = useContext(LocaleContext)
    const code = country.code
    const iso = country.codes?.['alpha-3'];

    const translatedCountries = require('i18n-iso-countries');
    translatedCountries.registerLocale(require(`i18n-iso-countries/langs/${locale?.code.substring(0,2)}.json`))

    return (
        <Grid container spacing={0} justifyContent='space-between' mt={{xs: 1, md: 1}} display='flex'>
            <Grid item xs={3} sm={2} md={1}>
                <Flag code={code} width={40} />
            </Grid>
            <Grid item xs>
                <Typography variant='h6' gutterBottom>
                    {translatedCountries.getName(code, locale?.code.substring(0,2))}
                </Typography>
            </Grid>
            <Grid item xs={3} sm={2} md={1}>
                <Typography variant='h6' gutterBottom>
                    {iso}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default SingleCountry;