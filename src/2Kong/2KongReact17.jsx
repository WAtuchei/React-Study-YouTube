import '../App.css'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import DataContext from './2Data'
import Report from './2Report'
import FormInput from './2FormInput'
import PayLists from './2PayLists'

function Spendee() {
    const header = {color: 'red'}
    const DATASET = [
        {id: uuidv4(), title: 'Hospital', amount: -20000},
        {id: uuidv4(), title: 'Fuel', amount: 6000},
        {id: uuidv4(), title: 'Food', amount: 12000},
    ]
    
    const [items, setItems] = useState(DATASET)
    const updateItem = (newItem) => { //FormInput Fn
        setItems((prevItem) => [newItem, ...prevItem]) //or use DATASET
    }

    return(
        <DataContext.Provider value={items}>
            <h1 style={header}>Spendee Cards</h1>
            <Report />
            <FormInput addNewData = {updateItem} />
            <PayLists dataArr = {items} />
        </DataContext.Provider>
    )
    //if PayLists useContext, attributes and props not necessary
}

export default Spendee