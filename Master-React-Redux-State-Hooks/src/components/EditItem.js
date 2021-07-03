import { Modal, Button } from 'semantic-ui-react';
import EntryForma from './EntryForma'
const EditItem = (props) => {
    const { isOpen, setIsOpen, description, value, isExpense, setDescription, setValue, setIsExpense } = props;
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit item</Modal.Header>
            <Modal.Content>
                <EntryForma
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default EditItem;