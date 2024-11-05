import { Link } from 'react-router-dom'
import styles from './aboutUs.module.css'

const AboutUs = () => {
    
/*
    const navigate = useNavigate()

    useEffect(() => {
    navigate('/about-us')
    }, [])
*/

  return (
    <section className={styles.aboutUs}>
        AboutUs
        <div><Link to='/'>Return</Link></div>
    </section>
  )
}

export default AboutUs