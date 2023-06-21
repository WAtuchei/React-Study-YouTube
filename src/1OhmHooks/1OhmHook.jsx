import { useState, useEffect } from 'react'
import useCounter from './1useCounter'
import reactLogo from '../assets/react.svg'
import viteLogo from './vite.svg'
import '../App.css'

function OHooks() {
    const {count, add, min} = useCounter()
    const [name, setName] = useState('WAtuchei')
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res => res.json())
        .then(data => setData(data))    
  },[count])

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>{name}</h1>
            <button onClick={() => setName('WA Dev')}>
                Update Name
            </button>
            <h2>count is {count}</h2>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
            <div className="card">
                <button onClick={min}>
                    decrease
                </button>
                <button onClick={add}>
                    increase
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default OHooks
