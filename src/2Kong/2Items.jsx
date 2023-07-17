import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

function Items(props) {
    const {title, amount} = props,
    amountAbs = Math.abs(amount),
    money = amountAbs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    Items.propTypes = {
        title: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
    }
    const symbol = amount < 0 ? '-' : '+'
    const status = amount < 0 ? 'expense' : 'income'
    
    return (
        <li className={`payItems ${status}`}>
            <span>{title}</span>
            <span>{symbol}{money}</span>
        </li>
    )
}

export default Items