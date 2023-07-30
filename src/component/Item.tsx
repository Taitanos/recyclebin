import React from "react";


type PropsType = {
    id: number
    value: number
    name: string
    onDelete: (itemId: number) => void
    onIncrement: (itemId: number) => void
    onDecrement: (itemId: number) => void
}

function Item({id, name, value, onIncrement, onDecrement, onDelete}: PropsType) {

    const formCount = () => {
        return value === 0 ? "Ноль" : value.toString()
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-"
        classes += value === 0 ? "danger" : "primary"
        return classes
    }

    return (
        <div>
            <h4>{name}</h4>
            <span className={getBadgeClasses()}>{formCount()}</span>
            <button className="btn btn-secondary btn-sm m-1" onClick={() => onIncrement(id)}>Добавить
            </button>
            <button className="btn btn-secondary btn-sm m-1" onClick={() => onDecrement(id)}>Убавить
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
}

export default Item;