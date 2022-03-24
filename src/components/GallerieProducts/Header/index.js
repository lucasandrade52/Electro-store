import List from "../../Header/TopBar/List"
import ItemList from "../../Header/TopBar/ItemList"
import './styles.css'

export default function Header() {
  return (
    <section className="container__products--header">
      <h2>New Products</h2>
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