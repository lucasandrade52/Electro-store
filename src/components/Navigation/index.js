import List from "../Common/List"
import ItemList from "../Common/ItemList"
import { ItemData } from "./ItemData"
import './styles.css'
import Link from "../Common/Link"

export default function Navigation() {
  return (
    <nav className="navigation">
      <List className="navigation__list">
        {ItemData.map((data, index) => {
          return (
            <ItemList key={index} className="navigation__list--item">
              <Link className="btn" href={data.link}>
                {data.text}
              </Link>
            </ItemList>
          )
        })}
      </List>
    </nav>
  )
}