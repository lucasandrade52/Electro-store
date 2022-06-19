import { IoIosArrowRoundBack } from "react-icons/io"
import { useSelector } from "react-redux"
import TopBar from "../../components/Header/TopBar";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import './styles.css'

export default function Cart() {
  const length = useSelector(state => state.cart.length)

  return (
    <section className="body">
      <TopBar />
      <section className="container">
        <section className="container__right">
          <header >
            <h2>Meu Carrinho</h2>
            <p><strong>{length} itens</strong></p>
          </header>
          <section className="container__scroll">
            <CartItem />
            <CartItem />
          </section>
          <footer>
            <a href="/"><IoIosArrowRoundBack />Continue comprando</a>
          </footer>
        </section>

        <section className="container__left">
          <header >
            <h2>Resumo</h2>
          </header>
          <CartCheckout />
          <footer className="buyCart">
            <section className="footer__title">
              <h3>Custo Total</h3>
              <h3>R$250</h3>
            </section>
            <button type="button">
              Comprar
            </button>
          </footer>
        </section>
      </section>
    </section>
  )
}