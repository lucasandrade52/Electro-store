import { MdAdd, MdRemove, MdDelete } from "react-icons/md"
import { useState } from "react";
import './styles.css'

export default function CartItem() {
  const [value, setValue] = useState(1)

  function increment() {
    setValue(value + 1)
  }

  function decrement() {
    setValue(value - 1)
  }

  return (
    <section className="main__products">
      <section className="products">
        <section className="products__title">
          <h5>Detalhe dos produtos</h5>
        </section>
        <section className="product__details">
          <img src="/images/laptop/laptop1.jpg" alt="" />
          <section className="details">
            <p className="name" ><strong>Name</strong></p>
            <p>Categoria</p>
            <button type="button">
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
          <button type="button" id="menos" onClick={decrement} >
            <MdRemove />
          </button>
          <p>{value}</p>
          <button type="button" id="mais" onClick={increment} >
            <MdAdd />
          </button>
        </section>
      </section>
      <section className="price">
        <section className="products__title">
          <h5>Preço</h5>
        </section>
        <section className="value"><strong>R$250</strong></section>
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