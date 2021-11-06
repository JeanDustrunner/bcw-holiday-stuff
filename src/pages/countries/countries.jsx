import React, { useEffect, useState, useRef } from "react";
import { Autocomplete, TextField, Box, Paper, Popper } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Container, SingleCountry, Flag } from '../../components'
import useFetch from 'use-http';



const Countries = () => {

    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
            "& .MuiAutocomplete-listbox": {
                borderBottom: '2px solid gray',
                // border: 'bottom',
                // height: '100vh',
                minHeight: '80vh',
                color: "black",
                fontSize: 18,
                "& :hover": {
                color: "red"
                },
                "& ul": {
                //list item specific styling
                textAlign: 'center',
                borderBottom: '1px solid gray',
                borderRadius: 2
                }
            }
            },
            textfield: {
            "& .MuiInputBase-input.MuiAutocomplete-input": {
                color: "blue",
                fontSize: 18,
                textAlign: 'center',
                borderBottom: '2px solid gray',
            },
            "& #custom-autocomplete-label": {
                //or could be targeted through a class
                color: "brown",
                textAlign: 'center',
            },
            "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
                color: "blue"
            }
            }
        })
    );

    const classes = useStyles();
    const heroku = 'https://pure-earth-30421.herokuapp.com/'
    const countriesBaseUrl = heroku + 'http://country.io/';
    const [countries, setCountries] = useState([]);
    const { get, post, response, loading, error } = useFetch(countriesBaseUrl);
    const countryRef = useRef();
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetchCountries();
    },[]);

    // useEffect(()=> {
    //     CountriesList();
    // }, [filter])

    const fetchCountries = async () => {
        const countriesJSON = await get('names.json');
        if (response.ok) {
            console.log('JSON: ', typeof countriesJSON, countriesJSON);
            const initialCountries = Object.entries(countriesJSON)
            console.log(typeof initialCountries);
            console.log(initialCountries);
            setCountries(initialCountries);
        }
    }

    const countryClicked = (country) => {
        console.log(country[1])
    }

    const updateFilter = () => {
        setFilter(countryRef.current.value);
        // console.log('FILTER: ', filter)
    }

    // const CountriesList = () => {
    //     let filteredCountries = countries.filter((country) => country[1].startsWith(filter))
    //     console.log(filteredCountries);
    //     filteredCountries.map((country, index) => {
    //         return (
    //             <SingleCountry key={index} selected={() => countryClicked(country)} country={country} filter={filter}/>
    //         )
    //     })
    // }

    const CustomPopper = function (props) {
        const classes = useStyles();
        return <Popper {...props} className={classes.root} placement="bottom" />;
    };

    return(
        <>
            
            {/* <TextField 
                fullWidth
                inputRef={countryRef}
                onChange={updateFilter}
            /> */}
            <Autocomplete
                // sx={{max-height: 1000px}}
                open='true'
                id="country-select-demo"
                fullWidth
                options={countries}
                autoHighlight
                // PaperComponent={CustomPaper}
                PopperComponent={CustomPopper}
                getOptionLabel={(option) => option[1]}
                renderOption={(props, option) => (
                    // <SingleCountry selected={() => countryClicked(option)} country={option} filter={filter} {...props}/>
                    <Box component="ul" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {/* <SingleCountry selected={() => countryClicked(option)} country={option} filter={filter}/> */}
                            <Flag code={option[0]}/>
                            {option[1]}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    className={classes.textfield}
                    />
                )}
                />
            {/* {countries.map((country, index) => {
                    return (
                        <SingleCountry key={index} selected={() => countryClicked(country)} country={country} filter={filter}/>
                    )
            })} */}
        </>
    )
}

export default Countries;