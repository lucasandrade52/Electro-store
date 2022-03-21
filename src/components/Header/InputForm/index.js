import Button from "../../Button"
import Input from "../../Input"

export default function InputForm() {
  return (
    <>
      <form className="header__form">
        <select className="header__select">
          <option value="0">Todas as Categorias</option>
          <option value="1">Notebook</option>
          <option value="2">Acessórios</option>
          <option value="3">Câmeras</option>
        </select>
        <Input className="header__search" placeholder="Buscar" />
        <Button className="header__button">Pesquisar</Button>
      </form>
    </>
  )
}