import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      {!isAuthenticated &&
        <>
          <h1>Please Login</h1>
          <div>
            <input type="text" placeholder='Username' />
          </div>

          <div>
            <input type="text" placeholder='Password' />
          </div>

          <button>Submit</button>
        </>
      }
      {isAuthenticated &&
        <>
          <h1>Karaoke</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      }
    </>
  )
}

export default App
