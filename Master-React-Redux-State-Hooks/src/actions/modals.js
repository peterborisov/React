import types from './modalTypes';

export const openEditModal = (id) => {
  return { type: types.OPEN_EDIT_MODAL, payload: { id } };
};

export const closeEditModal = () => {
  return { type: types.CLOSE_EDIT_MODAL };
};
