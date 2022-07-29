import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addItem = createAction('ADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')
export const increment = createAction('INCREMENT')

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [removeItem.type]: (state, action) => state.filter((item) => item.id != action.payload),
  // [increment]: (state) => ({ ...state, price: state.price + 1 })
})

export const calculateTotalSelector = (state) => {
  return state.cart.reduce(
    (acc, item) => acc + item.price,
    0
  );
}