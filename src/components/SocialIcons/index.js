import List from "../Common/List"
import ItemList from "../Common/ItemList"
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