import React from 'react';

function CharComponent(props) {
    const style = {
        display: 'inline-block',
        padding: '0 16px',
        textAlign: 'center',
        margin: '16px',
        border: '4px solid black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'red'
    }
    return (
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    )
}

export default CharComponent;
