import { useEffect, useState } from 'react'
import styles from './app.module.css'
import Count from './components/Count/Count'
import Hero from './components/Hero/Hero'


const role = 'admin'

function App() {

  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(() => loading = false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className={styles.app}>

      {loading 
      ? <div>Loading...</div> 
      : <> <Hero role={role}/> <Count/> </>}

    </section>
  )
}

export default App