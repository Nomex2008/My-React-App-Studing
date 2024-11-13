import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { emailService } from '../../../services/email.service'
import { TType } from '../../../types'
import { applyStyle } from './apply-style'

const useEditor = () => {
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

    return {text, applyFormat, updateSelection, textRef, setText, mutate, isPending}
}

export default useEditor