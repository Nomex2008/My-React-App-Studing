import { useEffect, useState } from 'react'
import styles from './app.module.css'
import Count from './components/Count/Count'
import GetApi from './components/GetApi/GetApi'
import Hero from './components/Hero/Hero'
import LogIn from './components/logIn/logIn'


const role = 'admin'

function App() {
  
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(() => loading = false)
      console.log('loading complete!')
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className={styles.app}>

      {loading 
      ? <div>Loading...</div> 
      : <> <Hero role={role}/> <LogIn/> <Count/> <GetApi/> </>}

    </section>
  )
}

export default App