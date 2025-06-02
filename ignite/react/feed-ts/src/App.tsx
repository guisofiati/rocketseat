import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, type PostType } from "./components/Post"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/FlavioHenriqueF.png",
      name: "Flavio Henrique",
      role: "Desenvolvedor Front-End"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2025-05-29 08:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/GiovanniSofiati.png",
      name: "Giovanni Sofiati",
      role: "Programador"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2025-05-29 08:10:00")
  },
]


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                data={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
