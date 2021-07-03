import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance'
const DisplayBalances = (props) => {
  const { expenseTotal, incomeTotal } = props;
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              size='tiny'
              color='green'
              textAlign='left'
              label='Income:'
              value={incomeTotal}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              size='tiny'
              color='red'
              textAlign='left'
              label='Expenses:'
              value={expenseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances;