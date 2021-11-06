import React from 'react';

export const Flag = ({code}) => {
    return (
        <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
                alt=""
            />
    )
}

export default Flag;