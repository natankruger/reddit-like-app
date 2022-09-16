import fetcher from "./fetcher";

async function getPosts() {
  return await fetcher('posts')
}

export default getPosts