import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

const EntryLine = (props) => {
    const { id, description, value, isExpense = false, deleteEntry, setIsOpen, editEntry } = props;
    const handleDelete = () => {
        deleteEntry(id)
    }
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' bordered onClick={() => editEntry(id)} />
                            <Icon name='trash' onClick={handleDelete} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid> 
            </Segment>
        </>
    )
}

export default EntryLine;