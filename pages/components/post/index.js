import Style from './style.module.css'

export default function Post(props) {

  return (
    <div className={Style.Wrapper}>
      <small className={Style.SubTitle}>{props.userId}</small>
      <h3 className={Style.Title}>{props.title}</h3>
      <p>{ props.body }</p>
    </div>
  )
}