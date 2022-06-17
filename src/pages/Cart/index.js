import { MdAdd, MdRemove } from "react-icons/md"
import { useSelector } from "react-redux"
import { useState } from "react";
import TopBar from "../../components/Header/TopBar";

export default function Cart() {
  const length = useSelector(state => state.cart.length)
  const [value, setValue] = useState(0)

  function increment() {
    setValue(value + 1)
  }

  function decrement() {
    setValue(value - 1)
  }

  return (
    <section className="container">
      <TopBar />
      <main>
        <header >
          <h2>Meu Carrinho</h2>
          <p>{length} itens</p>
        </header>
        <section className="products">
          <section className="title"><h3>Detalhe dos produtos</h3></section>
          <section className="product">
            <img src="/images/laptop/laptop1.jpg" alt="" />
            <section className="details">
              <p>Name</p>
              <p>Categpria</p>
              <p>Marca</p>
            </section>
          </section>
        </section>
        <section className="quantity">
          <section className="title"><h3>Quantidade</h3></section>
          <section className="value">
            <button type="button" id="menos" onClick={decrement} >
              <MdRemove />
            </button>
            <p>{value}</p>
            <button type="button" id="mais" onClick={increment} >
              <MdAdd />
            </button>
          </section>
        </section>

      </main>
    </section>
  )
}