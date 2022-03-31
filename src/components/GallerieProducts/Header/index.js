import List from "../../Common/List"
import Title from "./Title"
import ItemList from "../../Common/ItemList"
import './styles.css'

export default function Header({ title }) {
  return (
    <section className="container__products--header">
      <Title>{title}</Title>
      <nav className="container_nav">
        <List className="container_navlist">
          <ItemList className="container_navlist--item">
            <a href="#">Laptops</a>
          </ItemList>
          <ItemList className="container_navlist--item">
            <a href="#">Smartphones</a>
          </ItemList>
          <ItemList className="container_navlist--item">
            <a href="#">Câmeras</a>
          </ItemList>
          <ItemList className="container_navlist--item">
            <a href="#">Acessórios</a>
          </ItemList>
        </List>
      </nav>
    </section>
  )
}