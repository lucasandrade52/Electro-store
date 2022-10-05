import Wrapper from "../Common/Wrapper";
import GallerieHeader from "./GallerieHeader";
import "./Carousel/styles.css"
import Carousel from "./Carousel/CarouselItem";

export default function GallerieProducts({ title }) {
  return (
    <Wrapper className="container__products">
      <GallerieHeader title={title} />
      <Carousel />

    </Wrapper>
  )
}