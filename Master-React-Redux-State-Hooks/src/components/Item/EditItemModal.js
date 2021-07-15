import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { closeEditModal } from '../../actions/modals.actions';
import useItemDetails from '../../hooks/useItemDetails';
import ItemForm from './ItemForm';

function EditItemModal(props) {
  const { isOpen, description, value, isExpense, id } = props;
  const dispatch = useDispatch();
  const itemUpdate = useItemDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit item</Modal.Header>
      <Modal.Content>
        <ItemForm
          description={itemUpdate.description}
          value={itemUpdate.value}
          isExpense={itemUpdate.isExpense}
          setDescription={itemUpdate.setDescription}
          setValue={itemUpdate.setValue}
          setIsExpense={itemUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => itemUpdate.updateItem(id)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditItemModal;
