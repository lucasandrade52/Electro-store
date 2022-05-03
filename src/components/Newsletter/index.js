import TitleH2 from "../Common/TitleH2";
import Input from "../Common/Input"
import Button from "../Common/Button"
import SocialIcons from "../SocialIcons"
import './styles.css'

export default function Newsletter() {
  return (
    <section className="container__newsletter">
      <div className="image">
        <figure>
          <img src="/images/newsletter.png" alt="" />
        </figure>
      </div>
      <section className="container__item">
        <TitleH2>Assine para receber nossa novidades</TitleH2>
        <section className="container__input">
          <Input
            className="container__search"
            placeholder="Informe seu Email"
          />
          <Button
            className="container__button"
          >
            Inscreva-se
          </Button>
          <SocialIcons />
        </section>
      </section>
    </section>
  )
}