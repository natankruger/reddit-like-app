import HomeBtn from "./homeBtn"
import Posts from "./posts"
import Destaques from "./destaques"

export default function Feed() {
  return (<section>
    <h1>Reddit like app</h1>
    <Destaques />
    <Posts />
  </section>)
}
