import Style from './style.module.css'

export default function Post(props) {

  return (
    <div className={Style.Wrapper}>
      <small>{props.userId}</small>
      <h1>{props.title}</h1>
      <p>{ props.body }</p>
    </div>
  )
}