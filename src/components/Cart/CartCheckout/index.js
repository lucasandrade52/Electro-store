import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShippingCost } from "../../../store/cart";
import FormatPrice from "../../../utils/formatPrice";
import "./styles.css";

export default function CartCheckout() {
  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.cart.shipping);
  const length = useSelector((state) => state.cart.cartTotalQuantity);
  const total = useSelector((state) => state.cart.subTotal);

  const optionShipping = [
    {
      id: 1,
      method: "Frete rápido",
      price: 12.99,
    },
    {
      id: 2,
      method: "Entrega agendada",
      price: 18.99,
    },
    {
      id: 3,
      method: "Retirar em mãos",
      price: 0.0,
    },
  ];

  const ticket = [
    {
      TenPercent: 10,
      twentyPercent: 20,
      ThirtyPercent: 30,
    },
  ];

  function handleCostShipping() {
    dispatch(getShippingCost());
  }

  return (
    <section className="resume__cart">
      <section className="resume__title">
        <p>
          <strong>{length} itens</strong>
        </p>
        <h3>
          <FormatPrice format="$0.00">{total}</FormatPrice>
        </h3>
      </section>
      <select
        className="cost__delivery"
        onChange={(event) => handleCostShipping(event.target.value)}
      >
        <option>Formas de Entrega</option>
        {optionShipping.map((item) => (
          <option key={item.id} value={item.price}>
            {item.method} - R${item.price}
          </option>
        ))}
      </select>
      <section className="codePromotion">
        <section className="codePromotion__title">
          <h4>
            <strong>Código de Desconto</strong>
          </h4>
          <input placeholder="Digite seu código" />
          {ticket ? "" : <p>Parabéns, você recebeu {}% de desconto!</p>}
          <button type="button">Aplicar</button>
        </section>
      </section>
    </section>
  );
}
