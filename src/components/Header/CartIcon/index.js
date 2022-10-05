import { ImCart } from "react-icons/im"
import { useSelector } from "react-redux"
import MiniCart from "./MiniCart"

import '../CartIcon/MiniCart/styles.css'

export default function CartIcon() {
  const length = useSelector(state => state.cart.cartTotalQuantity)

  return (
    <>
      <div className="cart">
        <a href="#MiniCart-open"><ImCart /></a>
        <span>Seu carrinho</span>
        <div className="numbers">{length}</div>
      </div>
      <MiniCart />
    </>
  )
}