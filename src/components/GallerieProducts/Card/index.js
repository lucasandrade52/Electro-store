import { ProductData } from './ProductData'
import { MdFavoriteBorder } from "react-icons/md"
import { RiArrowLeftRightFill } from "react-icons/ri"
import { ImEye } from "react-icons/im"
import './styles.css'

export default function Card() {
  return (
    <section className="container__cards">
      {ProductData.map((data, index) => {
        return (
          <section className="container__cards--products">
            <figure className="products__img">
              <img key={index} src={data.avatar} alt="" />
            </figure>
            <section className="products__info">
              <p className="category">{data.category}</p>
              <h2 className="name">{data.name}</h2>
              <div className="prices">
                <p className="price">R${data.price}</p>
                <p className="oldprice"><s>R${data.oldprice}</s></p>
              </div>
              <div className="products__avaliation">
                <figure className="avaliation">
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="products__footer">
                <a href="#"><MdFavoriteBorder /></a>
                <a href="#"><RiArrowLeftRightFill /></a>
                <a href="#"><ImEye /></a>
              </div>
            </section>
          </section>
        )
      })}
    </section>
  )
}