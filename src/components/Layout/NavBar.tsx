import styles from './NavBar.module.scss'
import SvgLogo from './SvgLogo'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
export default function NavBar() {
  const navref = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      navref.current,
      { autoAlpha: 0, y: -100 },
      { autoAlpha: 1, y: 0, delay: 0.5, duration: 1, ease: 'power3.out' },
    )
  }, [])

  return (
    <div ref={navref} className={styles.navbar}>
      <div className={styles.logo_liquid_glass}>
        <SvgLogo fill="white" />
      </div>
      <div className={styles.navlinks}>
        <a href="#" className={styles.navlink_liquid_glass}>
          Home
        </a>
        <a href="#" className={styles.navlink_liquid_glass}>
          About
        </a>
        <a href="#" className={styles.navlink_liquid_glass}>
          Work
        </a>
      </div>
    </div>
  )
}
