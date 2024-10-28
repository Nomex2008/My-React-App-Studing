import { useState } from 'react'
import styles from './app.module.css'

const NAME = [
  'Alex',
  'Nomex',
]

function App() {
  let [count, setCount] = useState(0)

  return (
    <section className={styles.app}>
      <p>Hi!</p>
      <div>
      I am {NAME.map(name => (<span key={name}>{name} </span>))}
      </div>
      <span className={styles.span}>Number:  </span><button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </section>
  )
}

export default App