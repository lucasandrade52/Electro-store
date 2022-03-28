import BannerImage from './BannerImage'
import BannerCounter from './BannerCounter'
import Button from "../Button"
import './styles.css'
import BannerTitle from './BannerTitle'

export default function Banner() {
  return (
    <section className="banner">
      <BannerCounter className="banner__counter" />
      <BannerTitle className="banner__title" />
      <Button className="banner__btn">Compre agora</Button>
    </section>
  )
}