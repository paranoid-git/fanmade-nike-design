import styles from "./NavBar.module.scss";
import SvgLogo from "./SvgLogo";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_liquid_glass}>
        <SvgLogo class="logo" fill="white" />
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
  );
}
