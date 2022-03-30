import Card from "../GallerieProducts/Card";
import Avatar from "../GallerieProducts/Avatar"
import InfoProducts from "../GallerieProducts/InfoProducts"
import Prices from "../GallerieProducts/Prices"
import { ProductData } from "../GallerieProducts/Card/ProductData"
import Title from "../GallerieProducts/Header/Title";
import Control from "../Control"
import './styles.css'


export default function SliderCard() {
  const filteredArray = ProductData.slice(0, 3);

  return (
    <Card className="container__sliders">
      <section className="container__control">
        <Title>Mais vendidos</Title>
        <Control />
      </section>
      {filteredArray.map((data, index) => {
        return (
          <section className="container__slider--products">
            <Avatar className="slider__img">
              <img key={index} src={data.avatar} alt="" />
            </Avatar>
            <InfoProducts className="slider__info">
              <p className="category">{data.category}</p>
              <h2 className="name">{data.name}</h2>
              <Prices className="prices">
                <p className="price">R${data.price}</p>
                <p className="oldprice"><s>R${data.oldprice}</s></p>
              </Prices>
            </InfoProducts>
          </section>
        )
      })}
    </Card>
  )
}