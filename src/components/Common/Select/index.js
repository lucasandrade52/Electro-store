export default function Select({ className, children }) {
  return (
    <select className={className}>
      {children}
    </select>
  )
}