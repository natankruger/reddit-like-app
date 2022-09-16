import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Style from './style.module.css'
import getUser from '../../api/user';

export default function Post(props) {
  const [user, setUser] = useState([])
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const res = await getUser(props.userId)
    setUser(res)
  }

  function goToComments() {
    router.push('/comentarios')
  }

  return (
    <div className={Style.Wrapper}>
      <small className={Style.SubTitle}>
        {user.name} - {user.username} - {user.email}
      </small>
      <h3 className={Style.Title}>{props.title}</h3>
      <p>{props.body}</p>
      <button onClick={goToComments}>Comentários</button>
    </div>
  )
}