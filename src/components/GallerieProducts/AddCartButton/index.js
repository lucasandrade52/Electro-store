import Button from '../../Common/Button'

export default function AddCartButton({ data, addItemCart }) {

  return (
    <div className="buy">
      <Button
        className="btn-buy"
        onClick={() => addItemCart(data)}
      ><span className="btn-text">Adicionar ao Carrinho</span>
      </Button>
    </div>
  )
}