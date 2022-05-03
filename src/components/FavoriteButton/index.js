import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import './styles.css'

export default function FavoriteButton({ isFavorite, handleClick }) {
  return (
    <section
      onClick={handleClick}
      className={`icons ${isFavorite ? "favorite" : ""}`}
    >
      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
    </section>
  )
}