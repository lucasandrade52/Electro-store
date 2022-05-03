export default function Figure({ className, children }) {
  return (
    <figure className={className}>
      {children}
    </figure>
  )
}