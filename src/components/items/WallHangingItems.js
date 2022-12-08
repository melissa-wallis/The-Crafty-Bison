<<<<<<< HEAD
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const WallHangingItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/items?itemTypeId=4`)
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
=======
//this module will pull all items with itemTypeId = 4
>>>>>>> navbar
