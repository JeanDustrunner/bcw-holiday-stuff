import React from 'react';

export const Flag = ({code, width}) => {
    return (
        <img
                loading="lazy"
                width={width}
                src={`https://flagcdn.com/w${width}/${code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w${width*2}/${code.toLowerCase()}.png 2x`}
                alt=""
                elevation={10}
            />
    )
}

export default Flag;