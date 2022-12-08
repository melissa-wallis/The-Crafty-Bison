//"homepage" displays all items before filtering

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Items.css"

export const AllItems = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    
    useEffect(
        () => {
            fetch (`http://localhost:8088/items`)
            .then(response => response.json())
            .then((itemsArray) => {
                setItems(itemsArray)
            })
        },
        []
        )
    
    //conditionally render a popup of the item edit form here
    //toggle from F (default) to T
    //if T (aka button clicked): show edit form


    const navigateToItemDetails = (itemId) => {
        navigate(`/${itemId}`)
    }
    
    return (
        <div className="items-container">
        {items.map((itemObj) => {
            return (
            <div className="item-card" key={itemObj.id}>
                <img
                src={itemObj.imageUrl}
                alt={itemObj.name}
                className="item-img"
                onClick={() => {
                    navigateToItemDetails(itemObj.id)
                }}
                />
                <div className="item-name">{itemObj.name}</div>
                <div className="item-name">{itemObj.description}</div>
                <Link className="item-edit" to={`/items/${itemObj.id}/edit`}>Edit</Link>
                <Link className="item-delete">Delete</Link>
            </div>
            )
        })}
        </div>
    )
    }






