import { MdDelete, MdClose, MdAdd, MdRemove } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FormatPrice from "../../../../utils/formatPrice";
import {
  decrement,
  deleteAllItems,
  getSubtotal,
  increment,
  removeItem,
} from "../../../../store/cart";
import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MiniCart() {
  const cart = useSelector((state) => state.cart);
  const length = useSelector((state) => state.cart.cartTotalQuantity);
  const subTotal = useSelector((state) => state.cart.subTotal);
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
    <section id="MiniCart-open">
      <section className="MiniCart__products">
        <section className="MiniCart__title">
          <h4>Meus Produtos ({length})</h4>
          <section className="MiniCart__icon">
            {length === 0 ? (
              ""
            ) : (
              <button
                className="MiniCart-btn"
                onClick={() => deleteItemsToCart()}
              >
                <MdDelete />
              </button>
            )}
            <a className="MiniCart-close" href="#">
              <MdClose />
            </a>
          </section>
        </section>
        {cart.products?.map((item) => (
          <section key={item.id} className="MiniCart__details">
            <img src={item.image} alt="" />
            <section className="items__details">
              <p className="items__name">
                <strong>{item.name}</strong>
              </p>
              <p>{item.category}</p>
              <p className="items__price">
                <FormatPrice format="$0.00">{item.price}</FormatPrice>
              </p>
              <button
                className="MiniCart__btnDelete"
                type="button"
                onClick={() => removeItemCart(item.id)}
              >
                <MdDelete /> excluir
              </button>
            </section>
            <section className="minicart__quantity">
              <section className="quantity__value">
                <button
                  type="button"
                  id="menos"
                  onClick={() => decrementItemCart(item.id)}
                >
                  <MdRemove />
                </button>
                <p>{item.cartQuantity}</p>
                <button
                  type="button"
                  id="mais"
                  onClick={() => incrementItemCart(item.id)}
                >
                  <MdAdd />
                </button>
              </section>
              <p>
                {item.stock === 1 ? (
                  <small>({item.stock} disponível)</small>
                ) : (
                  <small>({item.stock} disponíveis)</small>
                )}
              </p>
            </section>
          </section>
        ))}
        <section className="miniCart__footer">
          <section className="miniCart__subtotal">
            <p>
              {length == 1 ? (
                <small>{length} Produto no carrinho</small>
              ) : (
                <small>{length} Produtos no carrinho</small>
              )}
            </p>
            <h4>
              Subtotal: <FormatPrice format="$0.00">{subTotal}</FormatPrice>
            </h4>
          </section>
          <Link className="MiniCart__btn" to="/cart">
            <button className="MiniCart__btnBuy" type="submit">
              <ImCart /> Comprar
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
}
