import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeItemAction } from '../../actions/items';
import { openEditModal } from '../../actions/modals';

const Item = (props) => {
  const { id, description, value, isExpense = false } = props;
  const dispatch = useDispatch();

  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name='edit'
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name='trash'
                bordered
                onClick={() => dispatch(removeItemAction(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default Item;
