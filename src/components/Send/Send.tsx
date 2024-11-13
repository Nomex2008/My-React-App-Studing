import { Bold, Eraser, Italic, Underline } from "lucide-react"
import parse from 'html-react-parser';
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { TType } from "../../types"
import { applyStyle } from "./email-editor/apply-style"
import EmailList from "./EmailList/EmailList"
import styles from './send.module.css'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email.service";

const Send = () => {
  const [selectionStart,setSelectionStart] = useState(0)
  const [selectionEnd,setSelectionEnd] = useState(0)

  const [text, setText] = useState(``)

  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const queryClient = useQueryClient()

  const {mutate, isPending} = useMutation({
    mutationKey: ['create email'],
    mutationFn: () => emailService.sendEmails(text),
    onSuccess(){
      setText('')
      queryClient.refetchQueries({queryKey: ['email list']})
    }
  })

  const updateSelection = () => {
    if(!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart)
    setSelectionEnd(textRef.current.selectionEnd)
  }

  const applyFormat = (type: TType) => {
    let selectedText = text.substring(selectionStart, selectionEnd)

    if(!selectedText) return

    const before = text.substring(0, selectionStart)
    const after = text.substring(selectionEnd)

    setText(before + applyStyle(type, selectedText) + after)
  }

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
        >
        </textarea>
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