

export default function Title({ children, href }) {
  return (
    <h1 ><a href={href}>{children}</a></h1>
  )
}