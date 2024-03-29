import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = ( props ) => {
  const { addItem } = props;
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addItem()}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
