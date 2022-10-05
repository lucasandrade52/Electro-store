import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  decrement,
  deleteAllItems,
  getShippingCost,
  getSubtotal,
  increment,
  removeItem,
} from "../../store/cart";
import { Link } from "react-router-dom";
import FormatPrice from "../../utils/formatPrice";
import TopBar from "../../components/Header/TopBar";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import "./styles.css";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const shipping = useSelector((state) => state.cart.shipping);
  const discount = useSelector((state) => state.cart.discount);
  const length = useSelector((state) => state.cart.cartTotalQuantity);
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.cart.subTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubtotal());
  }, [cart, dispatch]);

  function removeItemCart(id) {
    dispatch(removeItem(id));
  }

  function deleteItemsToCart() {
    dispatch(deleteAllItems());
  }

  function incrementItemCart(id) {
    dispatch(increment(id));
  }

  function decrementItemCart(id) {
    dispatch(decrement(id));
  }

  return (
    <section className="body">
      <TopBar />
      {cart.products.length == 0 ? (
        <section className="empty">
          <h2>Meus items</h2>
          <p>Carrinho está vazio</p>
          <footer>
            <Link to="/">
              <IoIosArrowRoundBack />
              Volte a comprar
            </Link>
          </footer>
        </section>
      ) : (
        <section className="container">
          <section className="container__right">
            <header>
              <h2>Meu Carrinho</h2>
              <h3>
                <strong>{length} itens</strong>
              </h3>
            </header>
            <section className="container__scroll">
              {cart.products.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeItemCart={removeItemCart}
                  incrementItemCart={incrementItemCart}
                  decrementItemCart={decrementItemCart}
                />
              ))}
            </section>
            <footer>
              <Link to="/">
                <IoIosArrowRoundBack />
                Continue comprando
              </Link>
              <button
                className="MiniCart-btn"
                onClick={() => deleteItemsToCart()}
              >
                <MdDelete />
              </button>
            </footer>
          </section>

          <section className="container__left">
            <header>
              <h2>Resumo</h2>
            </header>
            <CartCheckout />
            <footer className="buyCart">
              <section className="footer__title">
                <p>Desconto</p>
                <p>
                  <FormatPrice format="$0.00">{discount}</FormatPrice>
                </p>
              </section>
              <section className="footer__title">
                <p>Frete</p>
                <p>
                  <FormatPrice format="$0.00">{shipping}</FormatPrice>
                </p>
              </section>
              <section className="footer__title">
                <h3>Custo Total</h3>
                <h3>
                  <FormatPrice format="$0.00">{total}</FormatPrice>
                </h3>
              </section>
              <button type="button">Comprar</button>
            </footer>
          </section>
        </section>
      )}
      <footer className="body__footer">
        <Link to="/">
          <h2>Electro@2022</h2>
        </Link>
      </footer>
    </section>
  );
}
