import fetcher from "./fetcher";

async function getUser(id) {
  return await fetcher(`users/${id}`)
}

export default getUser