import { Modal, Button } from 'semantic-ui-react';
import ItemForm from './ItemForm';

const EditItem = (props) => {
    const { isOpen, setIsOpen, description, value, isExpense, setDescription, setValue, setIsExpense } = props;
    const isOpen = () => {
        setIsOpen(false)
    }
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit item</Modal.Header>
            <Modal.Content>
                <ItemForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={isOpen}>Close</Button>
                <Button onClick={isOpen} primary>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default EditItem;