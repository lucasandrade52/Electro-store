import TopBar from "./TopBar"
import InputForm from "./InputForm"
import FavoriteIcon from "./FavoriteIcon"
import CartIcon from "./CartIcon"
import './styles.css'


export default function Header() {
  return (
    <section className="header">
      <TopBar />
      <section className="header__container">
        <section className="header__title">
          <h1>Electro</h1>
        </section>
        <InputForm />
        <section className="header__icon">
          <FavoriteIcon />
          <CartIcon />
        </section>
      </section>
    </section>
  )
}