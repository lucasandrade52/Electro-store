export default function MainContainer({ className, children }) {
  return (
    <section className={className}>
      {children}
    </section>
  )
}