import Figure from "../Common/Figure"
import Image from "../Common/Image"
import InfoProducts from "../GallerieProducts/InfoProducts"
import Prices from "../GallerieProducts/Prices"
import { ProductData } from "../GallerieProducts/Carousel/ProductData"
import Title from "../Common/TitleH2";
import Control from "../Common/Control"
import './styles.css'
import Wrapper from "../Common/Wrapper";


export default function SliderCard() {
  const filteredArray = ProductData.slice(0, 3);

  return (
    <Wrapper className="container__sliders">
      <section className="container__control">
        <Title>Mais vendidos</Title>
        <Control className="control" />
      </section>
      {filteredArray.map((data, index) => {
        return (
          <section key={index} className="container__slider--products">
            <Figure className="slider__img">
              <Image src={data.image} alt="" />
            </Figure>
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
    </Wrapper>
  )
}