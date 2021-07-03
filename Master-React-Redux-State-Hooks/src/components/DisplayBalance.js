import React from 'react';
import { Statistic } from 'semantic-ui-react';

const DisplayBalance = (props) => {
    const { size, color, textAlign, label, value } = props;
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: { textAlign } }}>
                {label}
            </Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance;