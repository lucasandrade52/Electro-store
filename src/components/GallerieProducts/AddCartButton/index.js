import Button from '../../Common/Button'

export default function AddCartButton({ data, addItemCart }) {

  return (
    <div className="buy">
      <Button
        className="btn-buy"
        onClick={() => addItemCart(data)}
      >Adicionar ao Carrinho
      </Button>
    </div>
  )
}