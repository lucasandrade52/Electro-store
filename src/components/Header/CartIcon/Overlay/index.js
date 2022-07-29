import { MdDelete, MdClose } from "react-icons/md"
import { ImCart } from "react-icons/im"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeItem } from '../../../../store/cart'
import "./styles.css"
import { Link } from "react-router-dom";

export default function Overlay() {
  const length = useSelector(state => state.cart.length)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  function removeItemCart(id) {
    dispatch(removeItem(id))
  }

  return (
    <section id="overlay-open">
      <section className="overlay__products">
        <section className="overlay__title">
          <h4>Meus Produtos ({length})</h4>
          <a className="overlay-close" href="#"><MdClose /></a>
        </section>
        {cart.map(item => (
          <section key={item.id} className="overlay__details">
            <img src={item.image} alt="" />
            <section className="items__details">
              <p className="items__name" ><strong>{item.name}</strong></p>
              <p>{item.category}</p>
              <p>R${item.price}</p>
              <button
                className="overlay__btnDelete"
                type="button"
                onClick={() => removeItemCart(item.id)}
              >
                <MdDelete /> excluir
              </button>
            </section>
          </section>
        ))}
        <Link className="overlay__btn" to="/cart">
          <button className="overlay__btnBuy" type="submit">
            <ImCart /> Comprar
          </button>
        </Link>
      </section>
    </section>
  )
}