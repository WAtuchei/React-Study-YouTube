import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    function min() {
        setCount(count - 1)
    }
    
    return { count, add, min }
}

export default useCounter