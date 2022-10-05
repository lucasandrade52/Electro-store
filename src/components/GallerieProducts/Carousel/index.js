import './styles.css'
import CarouselItem from './CarouselItem'

export default function Carousel() {
  const ProductData = []
  return (
    <CarouselItem products={ProductData} />
  )
}