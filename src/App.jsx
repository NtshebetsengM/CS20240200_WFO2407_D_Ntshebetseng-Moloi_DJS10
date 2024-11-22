import React from 'react'
import { useEffect, useState } from 'react'

const apiUrl ="https://jsonplaceholder.typicode.com/posts"
function App() {
  const [ blogData, setBlogData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  
  useEffect(()=>{
    fetch(apiUrl)
    .then((res) => {
      if(!res.ok){
        throw new Error('Data fetching failed')
      }
      return res.json()
    })
    .then((data) => {
      setBlogData(data)
      setLoading(false)
      })
    .catch(() =>{
      setError("Data fetching failed")
      setLoading(false)
    })
}, [])

if (loading) return <h1>Loading...</h1>

if(error) {
  return <h1>{error}</h1>}

return( 
  <div>
    <h1>Posts</h1>
      <ol>
        {blogData.map((item)=>( 
          <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                </li>
          ))}
      </ol>
  </div>
)
}

export default App
