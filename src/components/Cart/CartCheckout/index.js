import { useSelector } from 'react-redux'
import { calculateTotalCart } from '../../../store/cart'
import FormatPrice from '../../../utils/formatPrice'
import './styles.css'

export default function CartCheckout() {
  const length = useSelector(state => state.cart.length)
  const total = useSelector(calculateTotalCart)

  return (
    <section className="resume__cart">
      <section className="resume__title">
        <p><strong>{length} itens</strong></p>
        <h3>
          <FormatPrice format="$0.00">{total}</FormatPrice>
        </h3>
      </section>
      <select className="cost__delivery">
        <option>Formas de Entrega</option>
        <option>Frete rápido - R$12,99</option>
        <option>Entrega agendada - R$9,90</option>
        <option>Retirar em mãos</option>
      </select>
      <section className="codePromotion">
        <section className="codePromotion__title">
          <h4><strong>Código de Desconto</strong></h4>
          <input placeholder="Digite seu código" />
          <button type="button">Aplicar</button>
        </section>
      </section>
    </section>
  )
}
