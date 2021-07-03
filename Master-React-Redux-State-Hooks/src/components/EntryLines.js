import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

const EntryLines = (props) => {
    const { entries, deleteEntry, setIsOpen, editEntry } = props;

    return (
        <Container>
            {entries.map((el) => (
                <EntryLine 
                id={el.id} {...el} 
                deleteEntry={deleteEntry} 
                setIsOpen={setIsOpen}
                editEntry={editEntry}
                />
            ))
            }
        </Container>
    )
}

export default EntryLines;