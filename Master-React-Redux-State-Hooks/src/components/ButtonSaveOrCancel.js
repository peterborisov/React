import React from 'react';
import { Button } from 'semantic-ui-react';

const SaveOrCancel = (props) => {
    const { addEntry} = props;
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button >Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => addEntry()}>OK</Button>
        </Button.Group>
    )
}

export default SaveOrCancel;