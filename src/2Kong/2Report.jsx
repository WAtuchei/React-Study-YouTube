import { useContext } from "react";
import DataContext from "./2Data";

function Report() {
    const contextData = useContext(DataContext),
        amounts = contextData.map(el => el.amount),
        income = amounts.filter(el => el > 0).reduce((total, el) => total += el , 0),
        expenseAbs = amounts.filter(el => el < 0).reduce((total, el) => total += el, 0),
        expense = Math.abs(expenseAbs),
        diff = income - expense

    const red = {color: 'red'},
        green = {color: 'lime'}
    const diffStyle = diff < 0 ? red : green

    return (
        <>
            <br />
            <h3>รายรับ : <span style={green}>{income}</span></h3>
            <h3>รายจ่าย : <span style={red}>{expense}</span></h3>
            <br />
            <h3>ส่วนต่าง : <span style={diffStyle}>{diff}</span></h3>
        </>
    )
}

export default Report