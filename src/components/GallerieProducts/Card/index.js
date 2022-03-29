export default function Card({ className, children }) {
  return (
    <>
      <section className={className}>{children}</section>
    </>
  )
}