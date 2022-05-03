import Form from "../Form"
import Select from "../Select"
import Button from "../Button"
import Input from "../Input"
import { ItemData } from "../../Navigation/ItemData.js"

export default function InputForm() {
  return (
    <>
      <Form className="header__form">
        <Select className="header__select">
          {ItemData.map((data, index) => {
            return (
              <option key={index} value={data.value}>{data.text}</option>
            )
          })}
        </Select>
        <Input className="header__search" placeholder="Buscar" />
        <Button className="header__button">Pesquisar</Button>
      </Form>
    </>
  )
}