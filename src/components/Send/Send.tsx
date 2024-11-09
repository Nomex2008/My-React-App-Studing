import { Bold, Eraser, Italic, Underline } from "lucide-react"
import { Link } from "react-router-dom"
import EmailList from "./EmailList/EmailList"
import styles from './send.module.css'

const Send = () => {
  return (
    <section className={styles.send}>

      <h1 className={styles.title}>Email editor</h1>

      <div className={styles.card}>
        <div className={styles.editor} spellCheck='false'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam maiores exercitationem soluta ab nemo alias ratione aut voluptate dolorum tempora autem, doloribus nobis voluptates, minima tempore quisquam voluptas quam!
        </div>
        <div className={styles.action}> 
          <div className={styles.tools}>
            <button><Eraser/></button>
            <button><Bold/></button>
            <button><Italic/></button>
            <button><Underline/></button>
          </div>
          <button className={styles.button}>Send now</button>
        </div>
      </div>

      <div className={styles.emailList}><EmailList/></div>

      <div className={styles.return}><Link to='/'>Return</Link></div>
    </section>
  )
}

export default Send