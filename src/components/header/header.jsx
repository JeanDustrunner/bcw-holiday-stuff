import React, { useContext, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, IconButton, Grid } from '@mui/material';
import { Container } from '../';
import { LocaleContext } from '../../contexts';
import { appLanguages } from '../../utils';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom";
import { SingleCountry } from '../../components';

const Header = () => {
  const { locale, setLocale } = useContext(LocaleContext);
  const languages = appLanguages;
  const history = useHistory();
  const country = history.location.state?.country

  // Set locale and reload to update context
  const changeLocale = (event) => {
    setLocale(event.target.value);
    window.location = window.location;
  }

  const home = () => {
    history.push({pathname: '/app/countries'})
  }


    return(
        <>
          <AppBar position={'sticky'} color={'primary'}>
            <Container>
              <Toolbar>
                <Grid container spacing={10} justifyContent='space-between'>
                  <Grid item xs={1}>
                    <IconButton aria-label='home' size='large' onClick={() => {home()}}>
                      <HomeIcon color='white'/>
                    </IconButton>
                  </Grid>
                  <Grid item xs={9} sm={6} md={3}>
                        <Select
                          variant='standard'
                          sx={{color: 'white', maxHeight: 40}}
                          fullWidth
                          value={localStorage.getItem('locale') || navigator.language.substring(0,2)}
                          onChange={changeLocale}
                        >
                          {Object.keys(languages).map((key, index) => {
                              return (
                                <MenuItem key={index} value={key}>
                                  <Typography variant="overline" gutterBottom mr={1} ml={1}>
                                    {languages[key]?.english},
                                  </Typography>
                                  <Typography variant='caption' gutterBottom>
                                    {languages[key]?.native}
                                  </Typography>
                                </MenuItem>
                              )
                          })}
                        </Select>
                  </Grid>
                </Grid>
              </Toolbar>
              {country && <SingleCountry country={country} />}
            </Container>
          </AppBar>
      </>
    )
}

export default Header;