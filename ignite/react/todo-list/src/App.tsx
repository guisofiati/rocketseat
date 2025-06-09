import { useState, type ChangeEvent, type FormEvent } from "react"
import { PlusCircleIcon } from "@phosphor-icons/react"
import { Header } from "./components/Header"
import { Item } from "./components/Item"

import styles from "./App.module.css"
import "./global.css"
import { EmptyTasks } from "./components/EmptyTasks"

export type TaskProps = {
  id: string,
  content: string,
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [input, setInput] = useState("")

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (input.trim().length < 4) {
      alert("Sua tarefa deve ter no mínimo 4 caracteres.")
      setInput("")
      return
    }

    const newTask: TaskProps = {
      id: Math.random().toString(36).substring(2),
      content: input,
      isDone: false
    }

    setTasks((prevState) => [...prevState, newTask])
    setInput("")
  }

  function handleDeleteTask(id: string) {
    setTasks((prevState) => prevState.filter(task => task.id !== id))
  }

  function handleTaskStatus(id: string, checked: boolean) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isDone: checked } : task
      )
    )
  }

  function handleTaskContentInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setInput(event.target.value)
  }

  const totalTasksDone = tasks.filter(task => task.isDone).length

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <form onSubmit={handleCreateNewTask}>
          <input
            id="formInput"
            name="formInput"
            type="text"
            placeholder="Adicionar uma nova tarefa"
            value={input}
            onChange={handleTaskChange}
            required
            onInvalid={handleTaskContentInvalid}
          />
          <button type="submit" aria-label="Criar task">
            Criar
            <PlusCircleIcon size={16} />
          </button>
        </form>
        <div className={styles.taskStatus}>
          <div>
            <h2>Tarefas criadas</h2>
            <span>{tasks.length}</span>
          </div>
          <div>
            <h2>Concluídas</h2>
            <span>{totalTasksDone} de {tasks.length}</span>
          </div>
        </div>
        {
          !tasks.length ? <EmptyTasks /> :
            <ul>
              <li>
                {tasks.map(item => {
                  return (
                    <Item
                      key={item.id}
                      data={item}
                      onDelete={() => handleDeleteTask(item.id)}
                      onDone={(checked) => handleTaskStatus(item.id, checked)}
                    />
                  )
                })}
              </li>
            </ul>
        }
      </section>
    </main>
  )
}

export default App
