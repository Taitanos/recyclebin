import React from "react";
import Item from "./Item";

type ItemsPropsType = {
    id: number
    value: number
    name: string
}

type PropsType = {
    items: ItemsPropsType[]
    onIncrement: (itemId: number) => void
    onDecrement: (itemId: number) => void
    onDelete: (itemId: number) => void
    onReset: () => void
}

function Recyclebin({onReset, items, ...rest}:PropsType) {


    return <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Сброс</button>
        {items.map(item => (
            <Item key={item.id}
                  {...item}
                  {...rest}
            />
        ))}
    </div>
}

export default Recyclebin;