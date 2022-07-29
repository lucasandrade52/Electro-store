import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Image from "../../../Common/Image";
import Figure from "../../../Common/Figure";
import Wrapper from "../../../Common/Wrapper";
import InfoProducts from "../../InfoProducts";
import MenuIcons from "../../MenuIcons";
import Prices from "../../Prices";
import ProductScore from "../../Stars/ProductScore";
import AddCartButton from "../../AddCartButton"
import Control from "../../../Common/Control"
import { addItem } from "../../../../store/cart"

export default function CarouselItem({ products }) {
  const ProductData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const carousel = useRef(null)

  const nextSlide = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  const prevSlide = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  if (!Array.isArray(products) || products.length <= 0) {
    return null;
  }

  function addItemCart(data) {
    dispatch(addItem(data))
    console.log(data)
  }

  return (
    <>
      <section className="container__cards" ref={carousel}>
        {ProductData.map((data, index) => {
          const { id, category, image, name, price, oldprice } = data
          return (
            <Wrapper key={index} className="container__card" >
              <Wrapper className="container__cards--products">
                <Figure className="products__img">
                  <Image src={image} alt="" />
                </Figure>
                <InfoProducts className="products__info">
                  <p className="category">{category}</p>
                  <h2 className="name">{name}</h2>
                  <Prices className="prices">
                    <p className="price">R${price}</p>
                    <p className="oldprice"><s>R${oldprice}</s></p>
                  </Prices>
                  <ProductScore />
                  <MenuIcons id={id} name={name} />
                </InfoProducts>
              </Wrapper>
              <AddCartButton data={data} addItemCart={addItemCart} />
            </Wrapper>
          )
        })}
      </section>
      <Control
        className="controlCarousel"
        classNamePrev="leftarrow"
        onClickPrev={prevSlide}
        classNameNext="rightarrow"
        onClickNext={nextSlide}
      />
    </>
  )
}