import './styles.css'
import CarouselItem from './CarouselItem'
import { ProductData } from './ProductData'

export default function Carousel() {

  return (
    <CarouselItem products={ProductData} />
  )
}