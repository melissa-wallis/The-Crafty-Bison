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
                <Link className="item-edit" to={`/items/${itemObj.id}/edit`}>
                <button>Edit</button>
                </Link>
                <button className="item-delete" 
                onClick={(evt) => {
                evt.preventDefault()
                fetch (`http://localhost:8088/items/${itemObj.id}`, {
                        method: "DELETE"
                    })
                        .then(response => response.json())
                        .then (() => fetch (`http://localhost:8088/items`))
                        .then(response => response.json())
                        .then(response => 
                            setItems(response))
                    }}>Delete</button>
            </div>
            )
        })}
        </div>
    )
}

