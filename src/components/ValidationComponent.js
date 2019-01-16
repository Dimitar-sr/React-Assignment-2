import React from 'react';

function ValidationComponent(props) {
    if (props.textLength <= 5) {
        return (
            <div>
            <p>Validation Component: text too short</p>
            </div>
        )
    } else {
        return (
            <div>
            <p>Validation Component: text long enough</p>
            </div>
        )
    }
    
}

export default ValidationComponent;
