import {useState, useEffect} from 'react'



const apiUrl ="https://jsonplaceholder.typicode.com/posts"
function App() {
  const [ blogData, setBlogData ] = useState([])
  const [ error, setError ] = useState(null)
  
  useEffect(()=>{
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setBlogData(data)
      console.log(blogData)
    })
    .catch((error) =>{
      setError(error)
    })
}, [])

if(error) {
  return <h1>Data fetching failed</h1>}

return( 
  <div>
    <h1>title</h1>
    <p>content</p>
  </div>
)
}

export default App
