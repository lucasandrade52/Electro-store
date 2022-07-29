import { IoIosArrowRoundBack } from "react-icons/io"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeItem } from '../../store/cart'
import TopBar from "../../components/Header/TopBar";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import './styles.css'
import { Link } from "react-router-dom";

export default function Cart() {
  const length = useSelector(state => state.cart.length)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  function removeItemCart(id) {
    dispatch(removeItem(id))
  }

  return (
    <section className="body">
      <TopBar />
      {cart.length == 0 ? (<section className="empty"><h2>Meus items</h2><p>Carrinho está vazio</p></section>) : (
        <section className="container">
          <section className="container__right">
            <header >
              <h2>Meu Carrinho</h2>
              <p><strong>{length} itens</strong></p>
            </header>
            <section className="container__scroll">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeItemCart={removeItemCart}
                />
              ))}
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
                <h3>R$500,00</h3>
              </section>
              <button type="button">
                Comprar
              </button>
            </footer>
          </section>
        </section>
      )}
      <footer className="body__footer">
        <Link to="/"><h2>Electro@2022</h2></Link>
      </footer>
    </section>
  )
}
