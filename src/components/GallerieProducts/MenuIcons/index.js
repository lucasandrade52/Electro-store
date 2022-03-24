import { MdFavoriteBorder } from "react-icons/md"
import { RiArrowLeftRightFill } from "react-icons/ri"
import { ImEye } from "react-icons/im"

export default function MenuIcons() {
  return (
    <ul className="products__icons">
      <li className="icons">
        <a className="icons" href="#"><MdFavoriteBorder /></a>
      </li>
      <li className="icons">
        <a className="icons" href="#"><RiArrowLeftRightFill /></a>
      </li>
      <li className="icons">
        <a className="icons" href="#"><ImEye /></a>
      </li>
    </ul>
  )
}