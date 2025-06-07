import rocketLogo from "../assets/rocket-logo.svg"
import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo Rocket" />
      <h1>
        to
        <span>do</span>
      </h1>
    </header>
  )
}