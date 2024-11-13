import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { emailService } from '../../../services/email.service'
import styles from './emailList.module.css'

const EmailList = () => {
  const {data} = useQuery({
    queryKey: ['email list'],
    queryFn: () => emailService.getEmails()
  })

  return <div className={styles.list}>
    {data?.map((email) => (
      <div key={email.id}>
        {parse(email.text)}
      </div>
    ))}
  </div>
  
}

export default EmailList