import { ImPhone } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"
import { FaDollarSign, FaRegUser } from "react-icons/fa"
import Wrapper from "../../Common/Wrapper"
import ItemList from "../../Common/ItemList"
import List from "../../Common/List"
import './styles.css'

export default function TopBar() {
  return (
    <Wrapper className="topbar">
      <List className="topbar__list">
        <ItemList className="topbar__item topbar__item--phone">
          <ImPhone color="#D10024" />(55) 11 12345-6789
        </ItemList>
        <ItemList className="topbar__item topbar__item--email">
          <FiMail color="#D10024" />email@email.com
        </ItemList>
        <ItemList className="topbar__item topbar__item--address">
          <MdLocationOn color="#D10024" />1030 5th Avenue
        </ItemList>
      </List>

      <List className="topbar__list">
        <ItemList className="topbar__item topbar__item--currency">
          <FaDollarSign color="#D10024" />Real
        </ItemList>
        <ItemList className="topbar__item topbar__item--account">
          <FaRegUser color="#D10024" />Minha Conta
        </ItemList>
      </List>
    </Wrapper>
  )
}