export default function Avatar({ className, children }) {
  return (
    <figure className={className}>
      {children}
    </figure>
  )
}