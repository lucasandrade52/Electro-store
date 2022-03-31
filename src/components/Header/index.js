import TopBar from "./TopBar"
import Logo from "../Common/Logo"
import InputForm from "./InputForm"
import FavoriteIcon from "./FavoriteIcon"
import CartIcon from "./CartIcon"
import './styles.css'


export default function Header() {
  return (
    <>
      <TopBar />
      <header className="header">
        <Logo />
        <InputForm />
        <section className="header__icon">
          <FavoriteIcon />
          <CartIcon />
        </section>
      </header>
    </>
  )
}