import type { ChangeEvent } from "react";
import styles from "./Item.module.css"

import { TrashIcon } from "@phosphor-icons/react";
import type { TaskProps } from "../App";

type Props = {
  data: TaskProps
  onDelete: () => void
  onDone: (checked: boolean) => void
}

export function Item({ data, onDelete, onDone }: Props) {

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
          checked={data.isDone}
          onChange={handleTaskStatusChange}
        />
        <h3>{data.content}</h3>
      </div>
      <button title="Excluir task" aria-label="Excluir task" onClick={onDelete}>
        <TrashIcon size={14} />
      </button>
    </div>
  )
}