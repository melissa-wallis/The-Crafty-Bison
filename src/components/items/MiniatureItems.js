import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const MiniatureItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/items?itemTypeId=3`)
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
                <div className="item-description">{itemObj.description}</div>
                <div className="item-price">{itemObj.price} Dollhairs</div>
                <Link className="item-edit" to={`/items/${itemObj.id}/edit`}>Edit</Link>
                <Link className="item-delete">Delete</Link>
            </div>
            )
        })}
        </div>
    )
}