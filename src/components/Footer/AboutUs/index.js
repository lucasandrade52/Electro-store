import { ImPhone } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"
import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import TitleH2 from "../../Common/TitleH2"
import Wrapper from "../../Common/Wrapper"

const aboutUs = [
  {
    about: 'Estamos no mercado desde 1933 e, por isso, somos uma das lojas mais tradicionais da cidade.',
    adress: '1030 5th Avenue',
    phone: '(55) 11 912345678',
    mail: 'email@email.com'
  }
]

export default function AboutUs() {
  return (
    <Wrapper className="container__list">
      <TitleH2>Sobre Nós</TitleH2>
      {aboutUs.map((data, index) => {
        return (
          <List key={index} >
            <ItemList className="container__list--item">
              <a href="#">{data.about}</a>
            </ItemList>
            <ItemList className="container__list--item">
              <a href="#"><MdLocationOn color="#D10024" />{data.adress}</a>
            </ItemList>
            <ItemList className="container__list--item">
              <a href="#"><ImPhone color="#D10024" />{data.phone}</a>
            </ItemList>
            <ItemList className="container__list--item">
              <a href="#"><FiMail color="#D10024" />{data.mail}</a>
            </ItemList>
          </List>
        )
      })}
    </Wrapper>
  )
}