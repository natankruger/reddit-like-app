import fetcher from "./fetcher";

async function getComments(id) {
  return await fetcher(`posts/${id}/comments`)
}

export default getComments
