import { GrPrevious, GrNext } from "react-icons/gr"

export default function Control({ className, classNamePrev, classNameNext, onClickPrev, onClickNext }) {
  return (
    <section className={className}>
      <a className={classNamePrev} onClick={onClickPrev}><GrPrevious /></a>
      <a className={classNameNext} onClick={onClickNext}><GrNext /></a>
    </section>
  )
}