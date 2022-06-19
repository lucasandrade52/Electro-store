import './styles.css'

export default function CartCheckout() {
  return (
    <section className="resume__cart">
      <section className="resume__title">
        <p><strong>{length} itens</strong></p>
        <h3><strong>R$250</strong></h3>
      </section>
      <select className="cost__delivery">
        <option value="Frete rápido" selected >Frete rápido - R$12,99</option>
        <option value="Entrega agendada" >Entrega agendada - R$9,90</option>
        <option value="Retirar em mãos" >Retirar em mãos</option>
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
