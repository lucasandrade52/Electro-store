import List from "../Header/TopBar/List"
import ItemList from "../Header/TopBar/ItemList"
import { ItemData } from "./ItemData"
import './styles.css'

export default function Navigation() {
  return (
    <nav className="navigation">
      <List className="navigation__list">
        {ItemData.map((data, index) => {
          return (
            <ItemList className="navigation__list--item">
              <a key={index} href={data.link}>{data.text}</a>
            </ItemList>
          )
        })}
      </List>
    </nav>
  )
}