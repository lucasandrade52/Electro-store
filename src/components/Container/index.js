import { BsArrowRightCircle } from "react-icons/bs"
import { ItemData } from "./ItemData"
import '../styles.css'

export default function Container() {

  return (
    <>
      {ItemData.map((data, index) => {
        return (
          <section className="container">
            <figure className="container__img" >
              <img src={data.image} alt={data.text} />
              <div className="container__div--gray"></div>
              <div className="container__div--red"></div>
            </figure>
            <section className="container__info">
              <h2>{data.text}</h2>
              <a key={index} href={data.link}>Compre agora <BsArrowRightCircle /></a>
            </section>
          </section>
        )
      })}
    </>
  )
}