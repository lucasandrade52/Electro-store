import { ImCart } from "react-icons/im"
import { useSelector } from "react-redux"

export default function CartIcon() {
  const length = useSelector(state => state.cart.length)

  return (
    <div className="cart">
      <a href="/Cart"><ImCart /></a>
      <span>Seu carrinho</span>
      <div className="numbers">{length}</div>
    </div>
  )
}