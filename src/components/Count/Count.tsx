import { useState } from 'react'
import styles from '../../app.module.css'

const Count = () => {
    let [count, setCount] = useState(0)

    return (
    <>
        <div className={styles.count}>
            <span className={styles.span}>Number:  </span><button onClick={() => setCount((count) => count + 1)}>{count}</button>
        </div>

        <div onClick={() => setCount(count => count = 0)} className={styles.restart}>RESTART!</div>
    </>
    )
}

export default Count