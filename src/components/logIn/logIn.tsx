import { useAuth } from '../../hooks/useAuth'
import styles from './login.module.css'

const LogIn = () => {
    const {isLogIn, setIsLogIn}= useAuth()
    
    return (
    <div className={styles.login}>
        {isLogIn ? 'You are good!' : 'Firstly log in!'}
        <br/>
        {isLogIn ? 
        <button className={styles.button} onClick={() => setIsLogIn(false)}>Live from system</button> 
        : <button className={styles.button} onClick={() => setIsLogIn(true)}>Authorize</button> }
    </div>
    )
}

export default LogIn