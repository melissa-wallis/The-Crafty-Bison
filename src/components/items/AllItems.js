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

   // delete button 

    return (
        <>
        <img className="hero" src="../../images/Banner.svg"></img>
        <div className="items-container">
        {items.map((itemObj) => {
            return <div className="item-card" value={itemObj.id} key={itemObj.id}>
                <img
                src={itemObj.imageUrl}
                alt={itemObj.name}
                className="item-img"
                onClick={() => {navigateToItemDetails(itemObj.id)}
        }
                />
            <div className="item-name">{itemObj.name}</div>
            <div className="item-description">{itemObj.description}</div>
            <div className="item-price">{itemObj.price} Dollhairs</div>
            <Link className="item-edit" to={`/items/${itemObj.id}/edit`}>Edit</Link>
            <button onClick={(evt) => {
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
        })}
        </div>
        </>
    )
}






