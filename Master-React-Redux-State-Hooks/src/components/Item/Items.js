import React from 'react';
import { Container } from 'semantic-ui-react';
import Item from './Item';

const Items = (props) => {
  const { items } = props;
  return (
    <Container>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Container>
  );
}

export default Items;
