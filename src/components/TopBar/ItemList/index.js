export default function ItemList({ className, children }) {
  return (
    <li className={className}>
      {children}
    </li>
  )
}