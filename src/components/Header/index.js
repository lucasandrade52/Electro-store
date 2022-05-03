import TopBar from "./TopBar"
import Logo from "../Common/Logo"
import InputForm from "../Common/InputForm"
import FavoriteIcon from "./FavoriteIcon"
import CartIcon from "./CartIcon"
import './styles.css'
import Wrapper from "../Common/Wrapper"


export default function Header() {
  return (
    <>
      <TopBar />
      <header className="header">
        <Logo />
        <InputForm />
        <Wrapper className="header__icon">
          <FavoriteIcon />
          <CartIcon />
        </Wrapper>
      </header>
    </>
  )
}