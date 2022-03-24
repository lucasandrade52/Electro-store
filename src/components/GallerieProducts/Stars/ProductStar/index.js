import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './styles.css';

export default function ProductStar() {
  return (
    <div className="products__avaliation--stars">
      <BsStarFill />
      <BsStarHalf />
      <BsStar />
    </div>
  )
}