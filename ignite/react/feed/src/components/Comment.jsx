import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/guisofiati.png" hasBorder={false} />
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
          <p>{content}</p>
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