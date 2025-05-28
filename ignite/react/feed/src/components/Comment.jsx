import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/guisofiati.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Sofiati</strong>
              <time title="28 de maio de 2025" datetime="2025-05-28 12:30:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <TrashIcon size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUpIcon />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}