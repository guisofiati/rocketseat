import { PencilLineIcon } from "@phosphor-icons/react"

import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D"
      />
      <div className={styles.profile}>
        <img src="https://github.com/guisofiati.png" />
        <strong>Guilherme Sofiati</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLineIcon height={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}