import { MdDelete, MdClose, MdAdd, MdRemove } from "react-icons/md"
import { ImCart } from "react-icons/im"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { increment, removeItem } from '../../../../store/cart'
import "./styles.css"
import { Link } from "react-router-dom";

export default function Overlay() {
  const length = useSelector(state => state.cart.length)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  function removeItemCart(id) {
    dispatch(removeItem(id))
  }
  console.log({ cart })

  function incrementItemCart(quantity) {
    dispatch(increment(quantity))
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
            {/* <span className="item__quantity">{item.quantity}</span> */}
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
            <section className="quantity__value">
              <button
                type="button"
                id="menos"
                onClick={() => incrementItemCart(item.quantity)}
              >
                <MdRemove />
              </button>
              <p>{item.quantity}</p>
              <button
                type="button"
                id="mais"
                onClick={() => incrementItemCart(item.quantity)}
              >
                <MdAdd />
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