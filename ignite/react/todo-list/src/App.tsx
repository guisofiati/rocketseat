import { useState, type ChangeEvent, type FormEvent } from "react"
import { PlusCircleIcon } from "@phosphor-icons/react"
import { Header } from "./components/Header"
import { Item, type TaskProps } from "./components/Item"
import { NoTasks } from "./components/NoTasks"

import styles from "./App.module.css"
import "./global.css"

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [task, setTask] = useState("")

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskProps = {
      id: Math.random().toString(36).substring(2),
      task,
      isDone: false
    }

    setTasks((prevState) => [...prevState, newTask])
    setTask("")
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

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  const totalTasksDone = tasks.filter(task => task.isDone).length

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleCreateNewTask}>
          <input
            id="formInput"
            name="formInput"
            type="text"
            placeholder="Adicionar uma nova tarefa"
            value={task}
            onChange={handleTaskChange}
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
          !tasks.length ? <NoTasks /> :
            <ul>
              <li>
                {tasks.map(item => {
                  return (
                    <Item
                      key={item.id}
                      id={item.id}
                      task={item.task}
                      isDone={item.isDone}
                      onDelete={() => handleDeleteTask(item.id)}
                      onDone={(checked) => handleTaskStatus(item.id, checked)}
                    />
                  )
                })}
              </li>
            </ul>
        }
      </main>
    </>
  )
}

export default App
