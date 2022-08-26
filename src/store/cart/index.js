import { createAction, createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existItem = state.some(item => item.id === newItem.id)

      if (existItem) {
        const index = state.findIndex(item => item.id === newItem.id)
        state[index].quantity += 1
        return
      }

      state.push(newItem)
    },
    removeItem(state, action) {
      return state.filter(item => item.id != action.payload)
    },
    increment(state, action) {
      const newItem = action.payload
      const index = state.findIndex(item => item.id === newItem.id)

      return state[index].quantity + 1


    }
  }

  // [addItem.type]: (state, action) => ({
  //   ...state,
  //   cart: verifyExistItem(state, action),
  // }),
  // [removeItem.type]: (state, action) => state.cart.filter((item) => item.id != action.payload),

  // [increment]: (state) => ({ ...state, quantity: state.quantity + 1 })
})

// export const cartQuantityItem = state => state.cart.length
export const calculateTotalCart = (state) => {
  return state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
}

export const { addItem, removeItem, increment } = cartSlice.actions;
export default cartSlice.reducer 