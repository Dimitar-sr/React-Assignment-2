import React from 'react';

function CharComponent() {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '2px solid black'
    }
    return (
        <div style={style}>
            <p>CharComponent</p>
        </div>
    )
}

export default CharComponent;
