import { useEffect, useState } from 'react'
import styles from './getapi.module.css'


const GetApi = () => {
    const [todos, setTodos] =  useState<any[]>([])

    useEffect(() => {
        /*
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json)
            })
            .catch(error => console.error('Error fetching data:', error)); // Handle any errors
        */

        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setTodos(data)
        }

        fetchData();
    }, [])

  return (
    <div className={styles.api}>
        <ul>
        {todos?.map((todo: any) => (
            <li key={todo.id}>{todo.id} {todo.title}</li>
        ))}
        </ul>
    </div>
  )
}

export default GetApi