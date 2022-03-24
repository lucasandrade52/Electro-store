import { ProductData } from './ProductData'
import InfoProducts from "../InfoProducts"
import Prices from "../Prices"
import ProductScore from "../Stars/ProductScore"
import MenuIcons from "../MenuIcons"
import Button from "../../Button"
import './styles.css'

export default function Card() {
  return (
    <>
      <section className="container__cards">
        {
          ProductData.map((data, index) => {
            return (
              <section className="container__card">
                <section className="container__cards--products">
                  <figure className="products__img">
                    <img key={index} src={data.avatar} alt="" />
                  </figure>
                  <InfoProducts className="products__info">
                    <p className="category">{data.category}</p>
                    <h2 className="name">{data.name}</h2>
                    <Prices className="prices">
                      <p className="price">R${data.price}</p>
                      <p className="oldprice"><s>R${data.oldprice}</s></p>
                    </Prices>
                    <ProductScore />
                    <MenuIcons />
                  </InfoProducts>
                </section>
                <div className="buy">
                  <Button className="btn-buy">Adicionar ao Carrinho</Button>
                </div>
              </section>
            )
          })}
      </section>
    </>
  )
}