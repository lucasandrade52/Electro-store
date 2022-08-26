import { IoIosArrowRoundBack } from "react-icons/io"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeItem, increment } from '../../store/cart'
import { Link } from "react-router-dom";
import { calculateTotalCart } from '../../store/cart'
import FormatPrice from '../../utils/formatPrice'
import TopBar from "../../components/Header/TopBar";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import './styles.css'

export default function Cart() {
  const length = useSelector(state => state.cart.length)
  const cart = useSelector(state => state.cart)
  const total = useSelector(calculateTotalCart)
  const dispatch = useDispatch()

  function removeItemCart(id) {
    dispatch(removeItem(id))
  }

  function incrementItemCart(quantity) {
    dispatch(increment(quantity))
  }

  return (
    <section className="body">
      <TopBar />
      {cart.length == 0 ? (<section className="empty"><h2>Meus items</h2><p>Carrinho está vazio</p></section>) : (
        <section className="container">
          <section className="container__right">
            <header >
              <h2>Meu Carrinho</h2>
              <h3><strong>{length} itens</strong></h3>
            </header>
            <section className="container__scroll">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeItemCart={removeItemCart}
                  incrementItemCart={incrementItemCart}
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
                <h3><FormatPrice format="$0.00">{total}</FormatPrice></h3>
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
