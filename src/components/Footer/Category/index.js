import List from "../../Header/TopBar/List";
import ItemList from "../../Header/TopBar/ItemList";
import Title from "../../GallerieProducts/Header/Title";

const categories = ["Ofertas", "Notebooks", "Smartphones", "Câmeras", "Acessórios"]

export default function Category() {
  return (
    <List className="container__list">
      <Title>Categorias</Title>
      {categories.map((data, index) => {
        return (
          <ItemList className="container__list--item">
            <a key={index} href="#">{data}</a>
          </ItemList>
        )
      })}
    </List>
  )
}