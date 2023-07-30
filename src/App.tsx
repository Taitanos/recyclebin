import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Recyclebin from "./component/Recyclebin";
import Navbar from "./component/Navbar";


function App() {

    const initialState = [
        {value: 0, id: 1, name: "Ложка"},
        {value: 0, id: 2, name: "Вилка"},
        {value: 0, id: 3, name: "Тарелка"},
        {value: 0, id: 4, name: "Стартовый набор минималиста"},
        {value: 0, id: 5, name: "Ненужные вещи"},
    ]

    const [items, setItems] = useState(initialState)

    const handlerDelete = (itemId: number) => {
        const newItem = items.filter((i) => i.id !== itemId)
        setItems(newItem)
    }

    const handlerReset = () => setItems(initialState)

    const handlerIncrement = (itemId: number) => {
        let newItemsValue = items.map(i => {
            if (i.id === itemId) {
                return {...i, value: i.value += 1}
            }
            return i
        })
        setItems(newItemsValue)
    }

    const handlerDecrement = (itemId: number) => {
        let newItemsValue = items.map(i => {
            if (i.id === itemId) {
                if (i.value > 0) {
                    return {...i, value: i.value - 1}
                }
                return i
            }
            return i
        })
        setItems(newItemsValue)
    }

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <Navbar totalItems={items.reduce((a,c) => a + c.value,0)}/>
                <Recyclebin
                    items={items}
                    onIncrement={handlerIncrement}
                    onDecrement={handlerDecrement}
                    onDelete={handlerDelete}
                    onReset={handlerReset}
                />
            </main>
        </div>
    );
}

export default App;
