import { Link } from "react-router-dom"
import styles from './send.module.css'

const Send = () => {
  return (
    <section className={styles.send}>

      <div className={styles.return}><Link to='/'>Return</Link></div>
    </section>
  )
}

export default Send