import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiClient from './apiClient'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
console.log(movies,'movies')
console.log(loading,'loading')
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await apiClient.get<any[]>("movies?select=*");
        console.log(response,'response')
        setMovies(response.data);
      } catch (error) { 
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
  )
}

export default App
