import numeral from "numeral";
import "numeral/locales/pt-br";

numeral.locale('pt-BR');

const FormatPrice = ({ format, children }) => {
  return (
    <strong>
      {numeral(children).format(format)}
    </strong>
  )
}

export default FormatPrice;