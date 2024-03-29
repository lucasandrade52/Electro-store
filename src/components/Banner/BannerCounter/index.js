import List from "../../Common/List"
import ItemList from "../../Common/ItemList"
import { useEffect, useState } from "react"

const twoDaysInSeconds = 172800;

export default function BannerCounter({ className }) {
  const [totalInSeconds, setTotalInSeconds] = useState(twoDaysInSeconds)

  const days = Math.floor(totalInSeconds / 86400) % 2
  const hours = Math.floor(totalInSeconds / 3600) % 24
  const minutes = Math.floor(totalInSeconds / 60) % 60
  const seconds = Math.floor(totalInSeconds % 60)

  useEffect(() => {
    let timeout
    if (totalInSeconds === 0) {
      alert("Promoção acabou")
      return
    }
    else {
      timeout = setTimeout(() => {
        setTotalInSeconds(totalInSeconds - 1)
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [totalInSeconds])

  return (
    <List className={className}>
      <ItemList className="counter">
        {days.toString().padStart(2, "0")} <span>dias</span>
      </ItemList>
      <ItemList className="counter">
        {hours.toString().padStart(2, "0")} <span>horas</span>
      </ItemList>
      <ItemList className="counter">
        {minutes.toString().padStart(2, "0")}<span>minutos</span>
      </ItemList>
      <ItemList className="counter">
        {seconds.toString().padStart(2, "0")} <span>segundos</span>
      </ItemList>
    </List>
  )
}