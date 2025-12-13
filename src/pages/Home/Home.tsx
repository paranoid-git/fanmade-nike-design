import { useEffect } from "react";
import styles from "./Home.module.scss";
import Scene from "../../canvas/Scene";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
export default function Home() {
  const shoeref = useRef(null);
  const rightref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Your GSAP animations here

    const shoeContainer = shoeref.current;

    gsap.to(shoeContainer, {
      xPercent: -100,
      y: 0,
      //duration: 1,
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 1,
        end: "+=1000",
      },
    });
  }, []);
  return (
    <section data-page>
      <div className={styles.hero}>
        <div className={styles.hero_left}>
          <div className={styles.text_2}>
            <div className={styles.text_container}>
              <h1
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "5rem",

                  textAlign: "center",
                  color: "white",
                }}
              >
                Nike
              </h1>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  color: "white",
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
            minHeight: "100vh",
            height: "100vh",
            overflow: "hidden",
            left: "50vw",
            position: "fixed",
            float: "right",

            width: "50%",
          }}
        >
          <div className={styles.shoe_container}>
            <Scene />
          </div>
        </div>
        <div ref={rightref} className={styles.hero_right}>
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "2.5rem",
              textAlign: "center",
              color: "white",
            }}
          >
            The Stats of Success
          </h1>
          <h1
            style={{
              paddingLeft: "8rem",
              left: "50%",
              fontFamily: "Montserrat",
              fontSize: "1rem",

              color: "white",
            }}
          >
            Over 500 Million+ Pairs Sold:
          </h1>
          <p
            style={{
              paddingLeft: "8rem",
              left: "50%",
              fontFamily: "Montserrat",
              fontSize: "1rem",

              color: "white",
            }}
          >
            Our footwear isn't just popular; it's a global phenomenon.<br></br>
            more and more people worldwide trust Nike for performance and style.
          </p>
        </div>
      </div>
    </section>
  );
}
