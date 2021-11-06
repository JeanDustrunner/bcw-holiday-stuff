import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { Flag } from '../'

const SingleCountry = ({country, selected, filter}) => {
    const code = country[0];
    const name = country[1];
    const [display, setDisplay] = useState(true);
    
    useEffect(()=>{
        if (name.startsWith(filter)) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }, [name, filter])

    return (
        {display} && <div>
            <Button variant='contained' onClick={() => selected(country)} fullWidth>
                <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
                    <Flag code={code}/>
                    {name}
                </Box>
            </Button>
        </div>
    )
}

export default SingleCountry;