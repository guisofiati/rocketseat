import { ClipboardTextIcon } from "@phosphor-icons/react";

import styles from "./EmptyTasks.module.css"

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <ClipboardTextIcon size={56} />
      <div>
        <h4>Você ainda não tem tarefas cadastradas</h4>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}