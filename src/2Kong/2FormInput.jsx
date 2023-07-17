import { React, useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import '../App.css'

function FormInput(props) {
    const [title, setTitle] = useState(''),
        [amount, setAmount] = useState(''),
        [formValid, setFormValid] = useState(false)

        const titleInput = (e) => {
            const titleInput = e.target.value
            setTitle(titleInput)
        }
        const amountInput = (e) => {
            const amountInput = e.target.value.trim()
            setAmount(amountInput)
        }
        const submitBTN = (e) => {
            e.preventDefault()
            const saveItem = {
                id: uuidv4(),
                title: title,
                amount: Number(amount)
            }
            props.addNewData(saveItem)
            setTitle('')
            setAmount('')
        }

    useEffect(() => {
        const valueChecked = (title.trim().length == 0 || amount.length == 0)

        setFormValid(valueChecked)
    }, [title, amount])

    return (
        <>
            <form onSubmit={submitBTN} noValidate>
                <div className='form-input'>
                    <input type="text" placeholder='หัวข้อ' onChange={titleInput} value={title}/>
                    <input type="number" placeholder='หากรายจ่ายใส่ -' onChange={amountInput} value={amount}/>
                    <button type='submit' disabled={formValid}>ยืนยัน</button>
                </div>
            </form>
        </>
        
    )
}

export default FormInput