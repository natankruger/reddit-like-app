
async function fetcher(path) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
  const ret = await res.json()

  return ret
}

export default fetcher