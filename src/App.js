import React, { Suspense, useEffect, useState, useRef, useMemo} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from './configs';
import axios from 'axios';
import './App.css';
import photo from './resources/holiday.jpg'
import useFetch from 'use-http';
import { SingleCountry } from './components';
import { FixedSizeList as List } from 'react-window';
import { Autocomplete } from '@mui/material';


export default function App() {

  
  const heroku = 'https://pure-earth-30421.herokuapp.com/'
  const countriesBaseUrl = heroku + 'http://country.io/';
  const [countries, setCountries] = useState([]);
  const { get, post, response, loading, error } = useFetch(countriesBaseUrl);

  useEffect(() => {
    fetchCountries();
  },[]);

  const fetchCountries = async () => {
    const countriesJSON = await get('names.json');
    if (response.ok) {
      console.log(countriesJSON);
      const initialCountries = Object.values(countriesJSON)
      console.log(typeof initialCountries);
      console.log(initialCountries);
      setCountries(initialCountries);
    }
  }

const countryClicked = (countryName) => {
  console.log(countryName);
}


  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact={true}>
            <Redirect to={ROUTES.APP.path} />
          </Route>
          <Route path={ROUTES.APP.path} component={ROUTES.APP.component} />
        </Switch>
      </BrowserRouter>
    </Suspense>
      // <>
      // {countries.map((country, index) => {
      //   console.log({country})
      //   // return (<li key={index}>{country}</li>);
      //   return (<SingleCountry key= {index} selected={() => countryClicked(country)} name={country}></SingleCountry>);
      // })}
      // </>
    // <>
    //   <div>APECZKA</div>
    //   {countries && countries.map((country, index) => {
    //     console.log('Pretty ', {country});
    //     return <div key={index}>country</div>;
    //         /* <SingleCountry key= {index} selected={() => countryClicked(country)} name={country} /> */
    //   })}
    // </>
    // <>
    //   <List
    //     height={150}
    //     itemCount={50}
    //     itemSize={35}
    //     width={300}
    //   >
    //     {countries.map((item, index) => <Row item={item} index={index} /> )}
    //   </List>
    // </>
  );
}

