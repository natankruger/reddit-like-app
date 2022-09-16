import React, { useState, useEffect } from 'react';
import HomeBtn from "./homeBtn"
import Posts from "./posts"
import Destaques from "./destaques"
import getPosts from '../api/posts';

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let data = await getPosts()
    setPosts(data)
  }

  return (<section>
    <h1>Reddit like app</h1>
    <Destaques />
    <Posts list={posts} />
  </section>)
}
