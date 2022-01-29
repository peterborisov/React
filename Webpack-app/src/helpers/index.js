import { useMemo, useReducer } from "react"

export const useContextReducer = ({
  actionTypes,
  initialState,
  reducer
}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const updatedActions = useMemo(() =>
    Object.keys(actionTypes).reduce((acc, actionName) => {
      acc[actionName] = (payload) => {
        dispatch({ payload, type: actionTypes[actionName] });
      };
      return acc;
    }, {}), [actionTypes]
  )

  const updatedValue = useMemo(
    () => ({ value: state, actions: updatedActions }),
    [state, updatedActions]
  )

  return { value: updatedValue }
};
