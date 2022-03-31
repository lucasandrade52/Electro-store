export default function Wrapper({ className, children }) {
  return (
    <section className={className}>
      {children}
    </section>
  )
}