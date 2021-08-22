import React from 'react';

function Colorize(props) {
    return (
        <div>
         <p style={{color:'green'}}>{props.color}</p>
        </div>
    );
}

export default Colorize;