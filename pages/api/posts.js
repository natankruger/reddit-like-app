import fetcher from "./fetcher";

async function getPosts() {
  return await fetcher('posts')
}

async function getPost(id) {
  return await fetcher(`posts/${id}`)
}

export { getPosts, getPost }