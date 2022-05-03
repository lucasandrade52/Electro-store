import List from "../../Common/List";
import ItemList from "../../Common/ItemList";
import TitleH2 from "../../Common/TitleH2";

const categories = ["Ofertas", "Notebooks", "Smartphones", "Câmeras", "Acessórios"]

export default function Category() {
  return (
    <List className="container__list">
      <TitleH2>Categorias</TitleH2>
      {categories.map((data, index) => {
        return (
          <ItemList key={index} className="container__list--item">
            <a href="#">{data}</a>
          </ItemList>
        )
      })}
    </List>
  )
}