import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  async function getServerData() {
    try {
      setLoader(true)
      const serverData = await fetch('http://localhost:4002/data')
      const jsondata = await serverData.json()
      setData(jsondata)
    } catch (e) {
      console.log(e)
    } finally {
      setLoader(false)
    }
  }

  return (
    <>
      <h2>Fetching Data using Node Server</h2>
      {
        data.map((ele)=>(
          <div>
            h2
          </div>
        ))
      }
      <button onClick={getServerData}>Fetch Data</button>
      {loader ? (
        <h2 style={{ color: 'brown', backgroundColor: 'white' }}>
          Data is Loading
        </h2>
      ) : null}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App