import React from 'react';
import "../assets/spinner.gif"

function Spinner(props) {
    return (
        <img src={Spinner} alt='Loading...' style={{width: '100px', margin: 'auto', display: 'block'}}/>
    );
}

export default Spinner;