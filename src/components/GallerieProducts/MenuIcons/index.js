import { useState, useEffect } from "react"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { RiArrowLeftRightFill } from "react-icons/ri"
import { ImEye } from "react-icons/im"
import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import Link from "../../Common/Link"
import FavoriteButton from "../../FavoriteButton"

export default function MenuIcons({ id, name }) {
  const [favorite, setFavorite] = useState(false)

  const ToggleFavorite = () => {
    const rawFavorites = localStorage.getItem("favorites")
    const currentFavorites = JSON.parse(rawFavorites) ?? []

    if (favorite) {
      const filteredFavorites = currentFavorites.filter(item => item.id !== id)
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites))
    } else {
      const newFavorites = [...currentFavorites, { id, name }]
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
    }

    setFavorite(!favorite)
  }

  return (
    <List className="products__icons">
      <FavoriteButton handleClick={ToggleFavorite} isFavorite={favorite} />

      <ItemList className="icons">
        <Link className="compare" >
          <RiArrowLeftRightFill />
        </Link>
      </ItemList >
      <ItemList className="icons">
        <Link className="quickview" >
          <ImEye />
        </Link>
      </ItemList>
    </List>
  )
}