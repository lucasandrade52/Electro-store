import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import TitleH2 from "../../Common/TitleH2"

const service = ["Minha Conta", "Ver o carrinho", "Lista de Favoritos", "Ver meu Pedido", "Ajuda"]

export default function Service() {
  return (
    <List className="container__list">
      <TitleH2>Serviços</TitleH2>
      {service.map((data, index) => {
        return (
          <ItemList key={index} className="container__list--item">
            <a href="#">{data}</a>
          </ItemList>
        )
      })}
    </List>
  )
}