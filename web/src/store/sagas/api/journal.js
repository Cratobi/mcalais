const URL = `http://localhost:8080/journal/`

const fetchJournal = async () => {
  const res = await fetch(`${URL}?size=50`)
  const data = await res.json()
  if (res.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}
const createJournal = async payload => {
  const res = await fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload[0]),
  })
  const data = await res.json()
  if (res.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

export default { fetchJournal, createJournal }
