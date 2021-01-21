import React from "react";

const ValidationComponent = (props) => {
    let validationMessage = props.inputLength <= 5 ?
        'Too short, need 5 or more chars' : props.inputLength >= 10 ?
            'Too long, need less than 10 chars' : ''
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default ValidationComponent;