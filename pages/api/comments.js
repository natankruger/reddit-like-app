import fetcher from "./fetcher";

async function getComments() {
  return await fetcher('comments')
}

export default getComments
