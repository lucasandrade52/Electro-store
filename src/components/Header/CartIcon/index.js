import { ImCart } from "react-icons/im"
import { useSelector } from "react-redux"
import OverlayItems from "./Overlay"

import '../CartIcon/Overlay/styles.css'

export default function CartIcon() {
  const length = useSelector(state => state.cart.length)

  return (
    <>
      <div className="cart">
        <a href="#overlay-open"><ImCart /></a>
        <span>Seu carrinho</span>
        <div className="numbers">{length}</div>
      </div>
      <OverlayItems />
    </>
  )
}