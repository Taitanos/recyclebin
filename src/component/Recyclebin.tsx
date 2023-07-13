import React, {useState} from "react";

type productIdType = {
    id: number
}

function Recyclebin() {

    const [count, setCount] = useState<number>(0)

    const formCount = () => {
        return count === 0 ? "Ноль" : count.toString()
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-"
        classes += count === 0 ? "danger" : "primary"
        return classes
    }

    const handlerIncrement = (productID: productIdType) => {
        console.log(productID)
        setCount(count+1)
    }

    const handlerDecrement = (productID: productIdType) => {
        console.log(productID)
        if (count > 0) {
            setCount(count-1)
        }
    }


    return (
        <>
            <span className={getBadgeClasses()}>{formCount()}</span>
            <button onClick={() => handlerIncrement({id:1})} className="btn btn-secondary btn-sm">plus</button>
            <button onClick={() => handlerDecrement({id:1})} className="btn btn-secondary btn-sm">minus</button>
        </>
    )
}

export default Recyclebin;