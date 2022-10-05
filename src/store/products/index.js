import { createAction, createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = []

const productSlice = createSlice({
  name:"products",
  initialState: INITIAL_STATE,
  reducers: {
    addProducts: (state, action) => {
      return state = [...action.payload]
    }
  }
})

export const { addProducts } = productSlice.actions;
export default productSlice.reducer 