import { useSelector } from "react-redux"
import { MdAdd, MdRemove, MdDelete } from "react-icons/md"
import './styles.css'
import FormatPrice from '../../../utils/formatPrice'

export default function CartItem({ item, removeItemCart, incrementItemCart }) {
  const length = useSelector(state => state.cart.length)

  return (
    <section className="main__products">
      <section className="products">
        <section className="products__title">
          <h5>Detalhe dos produtos</h5>
        </section>
        <section className="product__details">
          <img src={item.image} alt="" />
          <section className="details">
            <p className="name" ><strong>{item.name}</strong></p>
            <p>{item.category}</p>
            <button type="button" onClick={() => removeItemCart(item.id)}>
              <MdDelete /> excluir
            </button>
          </section>
        </section>
      </section>
      <section className="quantity">
        <section className="products__title">
          <h5>Quantidade</h5>
        </section>
        <section className="quantity__value">
          <button
            type="button"
            id="menos"
            onClick={() => incrementItemCart(item.quantity - 1)}
          >
            <MdRemove />
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            id="mais"
            onClick={() => incrementItemCart(item.quantity + 1)}
          >
            <MdAdd />
          </button>
        </section>
      </section>
      <section className="price">
        <section className="products__title">
          <h5>Preço</h5>
        </section>
        <section className="value">
          <strong><FormatPrice format="$0.00">{item.price}</FormatPrice>
          </strong>
        </section>
      </section>
      <section className="totalPrice">
        <section className="products__title">
          <h5>Total</h5>
        </section>
        <section className="value">
          <strong>
            <FormatPrice format="$0.00">{item.price * item.quantity}</FormatPrice>
          </strong>
        </section>
      </section>
    </section>
  )
}