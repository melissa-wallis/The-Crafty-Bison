import { useEffect, useState } from "react"

export const CrossStitchItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/items?itemTypeId=1`)
        .then((res) => res.json())
        .then((itemsArray) => {
            setItems(itemsArray)
        })
    }, [])

    return (
        <div className="items-container">
        {items.map((itemObj) => {
        return (
            <div className="item-card" key={itemObj.id}>
                <img
                src={itemObj.image}
                alt={itemObj.name}
                className="item-img"
                />
                <div className="item-name">{itemObj.name}</div>
            </div>
            )
        })}
        </div>
    )
}

