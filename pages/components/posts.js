import Post from "./post"

export default function Posts(props) {

  function renderList() {

    return props.list.map((item, key) => {
        return <Post userId={item.userId} title={item.title} body={item.body} key={key} />
      })
  }

    return (<section>
      {renderList()}
    </section>)
  }