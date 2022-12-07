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

    //navigates to item details view
    const navigateToItemDetails = (itemId) => {
        navigate(`/${itemId}`)
    }

    //edit button

    //delete button 
    const deleteButton = () => {
        <button onClick={() => {}} className="item-delete">Delete</button>
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
                <button className="item-edit">Edit</button>
                <button className="item-delete">Delete</button>
            </div>
            )
        })}
        </div>
    )
    }






