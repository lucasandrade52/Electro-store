import List from "../../Common/List"
import TitleH2 from "../../Common/TitleH2"
import ItemList from "../../Common/ItemList"

const informations = ["Sobre nós", "Contatos", "Políticas", "Ordens e Devolução", "Termos e Condições"]

export default function Information() {
  return (
    <List className="container__list">
      <TitleH2>Informações</TitleH2>
      {informations.map((data, index) => {
        return (
          <ItemList key={index} className="container__list--item">
            <a href="#">{data}</a>
          </ItemList>
        )
      })}
    </List>
  )
}