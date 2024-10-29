import styles from './app.module.css'
import Count from './components/Count/Count'
import Hero from './components/Hero/Hero'


const role = 'admin'

function App() {

  return (
    <section className={styles.app}>

      <Hero role={role}/>
      <Count/>

    </section>
  )
}

export default App