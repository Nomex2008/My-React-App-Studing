import { memo, useState } from 'react'
import styles from '../../app.module.css'

const InitialCount = () => {
    const [details, setDetails] = useState({
        count: 0
    })

    return (
    <>
        <div className={styles.count}>
            <span className={styles.span}>Number:  </span><button onClick={() => setDetails((details) => {
                return {
                    count: details.count + 1
                }
            })}>{details.count}</button>
        </div>

        <div onClick={() => setDetails(() => {
            return {
                count: 0
            }
        })} className={styles.restart}>RESTART!</div>
    </>
    )
}

const Count = memo(InitialCount)

export default Count