import AboutUs from './AboutUs'
import Category from './Category'
import Information from './Information'
import Service from './Service'
import Payments from './Payments'

import './styles.css'


export default function Footer() {
  return (
    <section className="container__footer">
      <section className="container__footer--top">
        <AboutUs />
        <Category />
        <Information />
        <Service />
      </section>
      <section className="container__footer--bottom">
        <Payments />
        <p className="copyright">Copyright ©2022 All rights reserved | This template is inspired by <span>colorlib.</span>
        </p>
      </section>
    </section>

  )
}