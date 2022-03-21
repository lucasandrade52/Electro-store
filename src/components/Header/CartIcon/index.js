import { ImCart } from "react-icons/im"

export default function CartIcon() {
  return (
    <div className="cart">
      <a href="#"><ImCart /></a>
      <span>Seu carrinho</span>
      <div className="numbers">2</div>
    </div>
  )
}