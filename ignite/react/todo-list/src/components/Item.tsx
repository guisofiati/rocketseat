import type { ChangeEvent } from "react";
import styles from "./Item.module.css"

import { TrashIcon } from "@phosphor-icons/react";

export type TaskProps = {
  id: string
  task: string
  isDone: boolean
  onDelete?: () => void
  onDone?: (checked: boolean) => void
}

export function Item({ task, onDelete, isDone, onDone }: TaskProps) {
  function handleTaskStatusChange(event: ChangeEvent<HTMLInputElement>) {
    onDone?.(event.target.checked)
  }
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <input
          type="checkbox"
          title="Marcar tarefa como finalizada"
          aria-label="Marcar tarefa como finalizada"
          checked={isDone}
          onChange={handleTaskStatusChange}
        />
        <h3>{task}</h3>
      </div>
      <button title="Excluir task" aria-label="Excluir task" onClick={onDelete}>
        <TrashIcon size={14} />
      </button>
    </div>
  )
}