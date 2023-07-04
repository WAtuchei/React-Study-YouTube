import '../App.css'
import { useContext } from 'react'
import DataContext from './2Data'
import Items from './2Items'

function PayLists() {
    // const {dataArr} = props
    const contextData = useContext(DataContext)

    return (
        <ul className='payLists'>
            {contextData.map(data => 
                <Items {...data} key={data.id} />
            )}
        </ul>
        // <ul className='payLists'>
        //     {dataArr.map(data => 
        //         <Items {...data} key={data.id} />
        //     )}
        // </ul>
    )
}

export default PayLists