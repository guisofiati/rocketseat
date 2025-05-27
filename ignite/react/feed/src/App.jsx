import { Post } from "./Post"
import { Header } from "./components/Header"

import "./global.css"

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Guilherme Sofiati"
        content="Lorem ipsum dolor sit amet"
      />
      <Post
        author="Giovanni Sofiati"
        content="Lorem ipsum dolor sit amet"
      />
    </>
  )
}
