import Button from "../../Button"
import Input from "../../Input"
import { ItemData } from "../../Navigation/ItemData.js"

export default function InputForm() {
  return (
    <>
      <form className="header__form">
        <select className="header__select">
          {ItemData.map((data, index) => {
            return (
              <option key={index} value={data.value}>{data.text}</option>
            )
          })}
        </select>
        <Input className="header__search" placeholder="Buscar" />
        <Button className="header__button">Pesquisar</Button>
      </form>
    </>
  )
}