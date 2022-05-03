import { BsArrowRightCircle } from "react-icons/bs"
import { ItemData } from "./ItemData"
import './styles.css'
import Wrapper from "../Common/Wrapper"
import Figure from "../Common/Figure"
import Image from "../Common/Image"
import TitleH2 from "../Common/TitleH2"
import Link from "../Common/Link"

export default function CampaignCard() {

  return (
    <>
      {ItemData.map((data, index) => {
        return (
          <Wrapper key={index} className="campaign-card">
            <Figure className="campaign-card__img" >
              <Image src={data.image} alt={data.text} />
              <div className="campaign-card__div campaign-card__div--gray">
              </div>
              <div className="campaign-card__div campaign-card__div--red">
              </div>
            </Figure>
            <Wrapper className="campaign-card__info">
              <TitleH2>{data.text}</TitleH2>
              <Link href={data.link}>
                Compre agora
                <BsArrowRightCircle />
              </Link>
            </Wrapper>
          </Wrapper>
        )
      })}
    </>
  )
}