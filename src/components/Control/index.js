import { GrPrevious, GrNext } from "react-icons/gr"

export default function Control() {
  return (
    <div className="control">
      <a href="#"><GrPrevious /></a>
      <a href="#"><GrNext /></a>
    </div>
  )
}