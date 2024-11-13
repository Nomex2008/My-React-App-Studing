import { Bold, Eraser, Italic, Underline } from "lucide-react"
import parse from 'html-react-parser';
import { Link } from "react-router-dom"
import EmailList from "./EmailList/EmailList"
import styles from './send.module.css'
import useEditor from "./email-editor/useEditor";

const Send = () => {
  const {text, applyFormat, updateSelection, textRef, setText, mutate, isPending} = useEditor()

  return (
    <section className={styles.send}>

      <h1 className={styles.title}>Email editor</h1>

      <div className={styles.card}>

        <div className={styles.preview} >
          {parse(text)}
        </div>

        <textarea  
        ref={textRef}
        className={styles.editor} 
        spellCheck='false'
        value={text}
        onChange={e => setText(e.target.value)}
        onSelect={updateSelection}
        />

        <div className={styles.action}> 
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser/></button>
            <button onClick={() => applyFormat('bold')}><Bold/></button>
            <button onClick={() => applyFormat('italic')}><Italic/></button>
            <button onClick={() => applyFormat('underline')}><Underline/></button>
          </div>
          <button disabled={isPending} onClick={()  => mutate()} className={styles.button}>Send now</button>
        </div>
        
      </div>

      <div className={styles.emailList}><EmailList/></div>

      <div className={styles.return}><Link to='/'>Return</Link></div>
    </section>
  )
}

export default Send