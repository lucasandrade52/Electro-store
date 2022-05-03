import TitleH2 from "../../Common/TitleH2"
import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import './styles.css'

export default function GallerieHeader({ title }) {
  return (
    <section className="container__header">
      <TitleH2>{title}</TitleH2 >
      <nav className="container_nav">
        <List className="container_navlist">
          <ItemList className="container_navlist--item">
            <a href="#">Notebook</a>
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