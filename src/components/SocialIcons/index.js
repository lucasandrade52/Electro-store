import List from "../Header/TopBar/List"
import ItemList from "../Header/TopBar/ItemList"
import { GrFacebookOption, GrTwitter, GrInstagram, GrPinterest } from "react-icons/gr"

export default function SocialIcons() {
  return (
    <List className="container__icons">
      <ItemList className="container__icons--item">
        <a href="#"><GrFacebookOption /></a>
      </ItemList>
      <ItemList className="container__icons--item">
        <a href="#"><GrTwitter /></a>
      </ItemList>
      <ItemList className="container__icons--item">
        <a href="#"><GrInstagram /></a>
      </ItemList>
      <ItemList className="container__icons--item">
        <a href="#"><GrPinterest /></a>
      </ItemList>
    </List>
  )
}