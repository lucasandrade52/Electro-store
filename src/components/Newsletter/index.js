import Title from "../GallerieProducts/Header/Title";
import Input from "../Input"
import Button from "../Button"
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
        <Title>Assine para receber nossa novidades</Title>
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
        </section>
      </section>
    </section>
  )
}