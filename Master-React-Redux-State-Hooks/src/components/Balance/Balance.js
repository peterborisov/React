import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Balance = (props) => {
  const { title, value, color, size } = props;
  const ifIsNan = (value) => {
    return isNaN(value) ? 0 : value
  }
  
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ texAlign: 'left' }}>{title}</Statistic.Label>
      <Statistic.Value>{ifIsNan(value)}</Statistic.Value>
    </Statistic>
  );
}

export default Balance;
