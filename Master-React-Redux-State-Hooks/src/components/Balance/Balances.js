import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Balance from './Balance';

function Balances(props) {
  const { expenseTotal, incomeTotal } = props;
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Balance title='Income' value={incomeTotal} color='green' size='tiny'/>
          </Grid.Column>
          <Grid.Column>
            <Balance title='Expenses' value={expenseTotal} color='red' size='tiny' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Balances;
