import { MdFavoriteBorder } from "react-icons/md"

export default function FavoriteIcon() {
  return (
    <div className="favorite">
      <a href="#"><MdFavoriteBorder /></a>
      <span>Seus Favoritos</span>
      <div className="numbers">4</div>
    </div>
  )
}