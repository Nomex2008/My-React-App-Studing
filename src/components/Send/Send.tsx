import { Bold, Eraser, Italic, Underline } from "lucide-react"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { TType } from "../../types"
import { applyStyle } from "./email-editor/apply-style"
import EmailList from "./EmailList/EmailList"
import styles from './send.module.css'

const Send = () => {
  const [text, setText] = useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam maiores exercitationem soluta ab nemo alias ratione aut voluptate dolorum tempora autem, doloribus nobis voluptates, minima tempore quisquam voluptas quam!
  `)

  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const applyFormat = (type: TType) => {
    if(!textRef.current) return

    let cursorStart = textRef.current?.selectionStart
    let cursorEnd = textRef.current?.selectionEnd

    let selectedText = text.substring(cursorStart, cursorEnd)

    if(!selectedText) return

    const before = text.substring(0, cursorEnd)
    const after = text.substring(cursorEnd)

    setText(before + applyStyle(type, selectedText) + after)
  }

  return (
    <section className={styles.send}>

      <h1 className={styles.title}>Email editor</h1>

      <div className={styles.card}>
        <textarea  
        ref={textRef}
        className={styles.editor} 
        spellCheck='false'
        value={text}
        onChange={e => setText(e.target.value)}
        //onClick={applyFormat}
        >
        </textarea>
        <div className={styles.action}> 
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser/></button>
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