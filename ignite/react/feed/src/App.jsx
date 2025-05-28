import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Sofiati"
            content="Lorem ipsum dolor sit amet"
          />
          <Post
            author="Giovanni Sofiati"
            content="Lorem ipsum dolor sit amet"
          />
        </main>
      </div>
    </>
  )
}
