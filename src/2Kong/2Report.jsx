import { useContext } from "react";
import DataContext from "./2Data";

const Report = () => {
    const contextData = useContext(DataContext),
        amounts = contextData.map(el => el.amount),
        income = amounts.filter(el => el > 0).reduce((total, el) => total += el , 0),
        expenseAbs = amounts.filter(el => el < 0).reduce((total, el) => total += el, 0),
        expense = Math.abs(expenseAbs)

    return (
        <>
            <h3>รายรับ : {income}</h3>
            <h3>รายจ่าย : {expense}</h3>
        </>
    )
}

export default Report