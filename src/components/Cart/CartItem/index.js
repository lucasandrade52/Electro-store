import { MdAdd, MdRemove, MdDelete } from "react-icons/md"
import { useState } from "react";
import './styles.css'

export default function CartItem({ item, removeItemCart }) {
  const [count, setCount] = useState(1)


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
          <button type="button" id="menos" onClick={() => setCount(count - 1)} >
            <MdRemove />
          </button>
          <p>{count}</p>
          <button type="button" id="mais" onClick={() => setCount(count + 1)} >
            <MdAdd />
          </button>
        </section>
      </section>
      <section className="price">
        <section className="products__title">
          <h5>Preço</h5>
        </section>
        <section className="value"><strong>{item.price}</strong></section>
      </section>
      <section className="totalPrice">
        <section className="products__title">
          <h5>Total</h5>
        </section>
        <section className="value"><strong>R$250</strong></section>
      </section>
    </section>
  )
}