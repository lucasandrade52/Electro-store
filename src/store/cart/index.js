import { createAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// const product = {
//     id: '',
//     name: '',
//     image: '',
//     category: '',
//     price: 0,
//     oldprice: 0,
//     stock: 0
// }

const INITIAL_STATE = {
  products: [],
  cartTotalQuantity: 0,
  subTotal: 0,
  shipping: 0,
  discount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existItem = state.products.some((item) => item.id === newItem.id);
      const index = state.products.findIndex((item) => item.id === newItem);

      if (existItem) {
        const index = state.products.findIndex(
          (item) => item.id === newItem.id
        );
        state.products[index].cartQuantity += 1;
        toast.info(
          `Adicionou uma unidade do(a) ${state.products[index].name} ao carrinho`,
          {
            position: "bottom-right",
            autoClose: 3000,
          }
        );
        return;
      }

      const itemCart = { ...newItem, cartQuantity: 1 };
      state.products.push(itemCart);

      toast.success(`Adicionou um ${newItem.name} ao carrinho`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    },
    removeItem(state, action) {
      state.products = [
        ...state.products.filter((item) => item.id != action.payload),
      ];

      toast.error(`Produto removido do carrinho`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    },
    increment(state, action) {
      const itemId = action.payload;
      const index = state.products.findIndex((item) => item.id === itemId);
      state.products[index].cartQuantity += 1;

      toast.info(
        `Adicionou uma unidade do(a) ${state.products[index].name} ao carrinho`,
        {
          position: "bottom-right",
          autoClose: 3000,
        }
      );
    },
    decrement(state, action) {
      const itemId = action.payload;
      const index = state.products.findIndex((item) => item.id === itemId);

      if (state.products[index].cartQuantity === 1) {
        state.products = [
          ...state.products.filter((item) => item.id != action.payload),
        ];

        toast.error(`Produto removido do carrinho`, {
          position: "bottom-right",
          autoClose: 3000,
        });
        return;
      }

      state.products[index].cartQuantity -= 1;

      toast.error(
        `Removeu uma unidade do(a) ${state.products[index].name} do carrinho`,
        {
          position: "bottom-right",
          autoClose: 3000,
        }
      );
    },
    deleteAllItems(state, action) {
      state.products = [];

      toast.error(`Excluiu todos os itens do carrinho`, {
        position: "bottom-right",
        theme: "colored",
        autoClose: 3000,
      });
    },
    getSubtotal(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.subTotal = total;
    },
    getShippingCost(state, action) {
      state.shipping = event.target.value;

      const shippingPrice = state.shipping;
      const quantity = state.cartTotalQuantity;
      const total = shippingPrice * quantity;

      console.log({ total });
      state.shipping = total;
    },
  },
});

export const {
  addItem,
  removeItem,
  increment,
  decrement,
  deleteAllItems,
  getSubtotal,
  getShippingCost,
} = cartSlice.actions;
export default cartSlice.reducer;
