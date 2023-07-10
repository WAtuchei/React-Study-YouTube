import '../App.css'
import {v4 as uuidv4} from 'uuid'
import { useReducer, useState } from 'react'
import DataContext from './2Data'
import Report from './2Report'
import FormInput from './2FormInput'
import PayLists from './2PayLists'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

function Spendee() {
    const header = {color: 'red'}
    const DATASET = [
        {id: uuidv4(), title: 'Ex Hospital', amount: -20000},
        {id: uuidv4(), title: 'Ex Fuel', amount: 6000},
        {id: uuidv4(), title: 'Ex Food', amount: 12000},
    ]
    
    const [items, setItems] = useState(DATASET)
    const updateItem = (newItem) => { //FormInput Fn
        setItems((prevItem) => [newItem, ...prevItem]) //or use DATASET
    }

    // Reducer
    const [showReport, setShowReport] = useState(true)
    const reducer = (state, action) => { //Reducer is switch
        switch (action.type) {
            case "SHOW" :
                return setShowReport(true)
            case "HIDE" :
                return setShowReport(false)
        }
    }
    const [state, dispatchFn] = useReducer(reducer, showReport)
    
    return(
        <DataContext.Provider value={items}>
            <h1 style={header}>Spendee Cards</h1>
            
            <Router>
                <ul className='BrowserNav'>
                    <NavLink to="/">Report Page</NavLink>
                    <NavLink to="/add">Transaction Page</NavLink>
                </ul>                
                <Routes>
                    <Route end path="/" element={
                        <>
                            {showReport && <Report />}
                            <button onClick={() => dispatchFn({type:"SHOW"})}>Show Result</button>
                            <button onClick={() => dispatchFn({type:"HIDE"})}>Hide Result</button>
                        </>                        
                        }>
                    </Route>
                    <Route path="/add" element={
                        <>
                            <FormInput addNewData = {updateItem} />
                            <PayLists dataArr = {items} />
                        </>
                        }>
                    </Route>
                </Routes>            
            </Router>            
        </DataContext.Provider>
    )
    //if PayLists useContext, attributes and props not necessary
}

export default Spendee