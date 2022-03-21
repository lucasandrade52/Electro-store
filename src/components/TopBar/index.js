import { ImPhone } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"
import { FaDollarSign, FaRegUser } from "react-icons/fa"
import ItemList from "./ItemList"
import List from "./List"
import './styles.css'

export default function TopBar() {
  return (
    <section className="header__topbar">
      <List className="header__list">
        <ItemList className="header__list--item">
          <ImPhone color="#D10024" />(55) 11 12345-6789
        </ItemList>
        <ItemList className="header__list--item">
          <FiMail color="#D10024" />email@email.com
        </ItemList>
        <ItemList className="header__list--item">
          <MdLocationOn color="#D10024" />1030 5ª Avenue
        </ItemList>
      </List>

      <List className="header__list">
        <ItemList className="header__list--item">
          <FaDollarSign color="#D10024" />Real
        </ItemList>
        <ItemList className="header__list--item">
          <FaRegUser color="#D10024" />Minha Conta
        </ItemList>
      </List>
    </section>
  )
}