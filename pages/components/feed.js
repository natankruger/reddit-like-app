import HomeBtn from "./homeBtn"
import Posts from "./posts"
import Destaques from "./destaques"
import Comments from "./post/commentBtn"

export default function Feed() {
  return (<section>
    <h1>Reddit like app</h1>
    <Destaques />
    <Posts />
    <Comments/>
  </section>)
}
