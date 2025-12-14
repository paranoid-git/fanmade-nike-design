import { useEffect } from 'react'
import styles from './Home.module.scss'
import Scene from '../../canvas/Scene'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { useDevice } from '../../hooks/useDevice'
export default function Home() {
  const shoeref = useRef(null)
  const rightref = useRef(null)
  const leftref = useRef(null)
  const isMobile = useDevice()

  useEffect(() => {
    // Your GSAP animations here
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      leftref.current,
      {
        xPercent: -100,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 1,
      },
    )

    gsap.fromTo(
      shoeref.current,
      {
        autoAlpha: 0,
        xPercent: 100,
      },
      {
        delay: 1.5,
        xPercent: 0,
        autoAlpha: 1,
        duration: 1,
      },
    )
    gsap.set(shoeref.current, {
      xPercent: 0,
      y: 0,
    })
    gsap.to(
      shoeref.current,

      {
        xPercent: -100,
        y: 0,

        scrollTrigger: {
          scrub: 1,
          pin: true,
          start: 'top top',
          trigger: '#container',
          end: isMobile ? '+=250' : '+=500',
        },
      },
    )
  }, [isMobile])
  return (
    <section data-page>
      <div className={styles.hero}>
        <div ref={leftref} className={styles.hero_left}>
          <div className={styles.text_2}>
            <div className={styles.text_container}>
              <h1
                className={styles.textheader1}
                style={{
                  fontFamily: 'Montserrat',
                  //fontSize: "5rem",

                  textAlign: 'center',
                  color: 'white',
                }}
              >
                Nike
              </h1>
              <p
                className={styles.textparagraph1}
                style={{
                  fontFamily: 'Montserrat',
                  //fontSize: "2.5rem",
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                Elevate your game.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={shoeref}
          style={{
            minHeight: '100vh',
            height: '100vh',
            overflow: 'visible',

            position: 'fixed',
            float: 'right',
          }}
          className={styles.shoe_wrapper}
        >
          <div className={styles.shoe_container}>
            <Scene style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div ref={rightref} id="right" className={styles.hero_right}>
          <h1
            className={styles.textheader1}
            style={{
              fontFamily: 'Montserrat',
              //fontSize: "2.5rem",
              textAlign: 'center',
              color: 'white',
            }}
          >
            The Stats of Success
          </h1>
          <h1
            style={{
              fontFamily: 'Montserrat',
              fontSize: '1rem',
              marginTop: '1rem',
              color: 'white',
            }}
          >
            Over 500 Million+ Pairs Sold:
          </h1>
          <p
            className={styles.textparagraph2}
            style={{
              fontFamily: 'Montserrat',
              fontSize: '1rem',

              color: 'white',
            }}
          >
            Our footwear isn't just popular; it's a global phenomenon.<br></br>
            more and more people worldwide trust Nike for performance and style.
          </p>
        </div>
      </div>
    </section>
  )
}
