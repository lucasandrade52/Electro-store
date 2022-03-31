import { FaCcVisa, FaRegCreditCard, FaCcMastercard, FaCcPaypal, FaCcDiscover, FaCreditCard } from "react-icons/fa"
import List from "../../Common/List"
import ItemList from "../../Common/ItemList"

export default function Payments() {
  return (
    <List className="container__payment">
      <ItemList className="container__payment--item">
        <a href="#"><FaCcVisa /></a>
      </ItemList>
      <ItemList className="container__payment--item">
        <a href="#"><FaRegCreditCard /></a>
      </ItemList>
      <ItemList className="container__payment--item">
        <a href="#"><FaCcMastercard /></a>
      </ItemList>
      <ItemList className="container__payment--item">
        <a href="#"><FaCcPaypal /></a>
      </ItemList>
      <ItemList className="container__payment--item">
        <a href="#"><FaCreditCard /></a>
      </ItemList>
      <ItemList className="container__payment--item">
        <a href="#"><FaCcDiscover /></a>
      </ItemList>
    </List>
  )
}