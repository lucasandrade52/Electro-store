import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import Title from "../../GallerieProducts/Header/Title"

const service = ["Minha Conta", "Ver o carrinho", "Lista de Favoritos", "Ver meu Pedido", "Ajuda"]

export default function Service() {
  return (
    <List className="container__list">
      <Title>Serviços</Title>
      {service.map((data, index) => {
        return (
          <ItemList className="container__list--item">
            <a key={index} href="#">{data}</a>
          </ItemList>
        )
      })}
    </List>
  )
}