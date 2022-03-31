import { ImPhone } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"
import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import Title from "../../GallerieProducts/Header/Title"

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
    <List className="container__list">
      <Title>Sobre Nós</Title>
      {aboutUs.map((data, index) => {
        return (
          <>
            <ItemList className="container__list--item">
              <a key={index} href="#">{data.about}</a>
            </ItemList>
            <ItemList className="container__list--item">
              <a key={index} href="#"><MdLocationOn color="#D10024" />{data.adress}</a>
            </ItemList>
            <ItemList className="container__list--item">
              <a key={index} href="#"><ImPhone color="#D10024" />{data.phone}</a>
            </ItemList>
            <ItemList className="container__list--item">
              <a key={index} href="#"><FiMail color="#D10024" />{data.mail}</a>
            </ItemList>
          </>
        )
      })}
    </List>
  )
}