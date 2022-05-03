export default function Input({ className, placeholder, id, type }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      id={id}
      type={type}
    />
  )
}