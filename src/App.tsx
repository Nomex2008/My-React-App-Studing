import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './app.module.css'
import Count from './components/Count/Count'
import GetApi from './components/GetApi/GetApi'
import Hero from './components/Hero/Hero'
import LogIn from './components/logIn/logIn'


const role = 'admin'

let time = 0; 

function App() {
  
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(() => loading = false)
      console.log('loading complete!')
    }, time)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className={styles.app}>

      {loading 
      ? <div>Loading...</div> 
      : <> <Hero role={role}/> <LogIn/> 
        <div className={styles.send}><Link to='/Send'>Let's go send a mail!</Link></div>
        <Count/> <GetApi/> </>}

    </section>
  )
}

export default App