import List from "../../Common/List"
import Title from "../../GallerieProducts/Header/Title"
import ItemList from "../../Common/ItemList"

const informations = ["Sobre nós", "Contatos", "Políticas", "Ordens e Devolução", "Termos e Condições"]

export default function Information() {
  return (
    <List className="container__list">
      <Title>Informações</Title>
      {informations.map((data, index) => {
        return (
          <ItemList className="container__list--item">
            <a key={index} href="#">{data}</a>
          </ItemList>
        )
      })}
    </List>
  )
}