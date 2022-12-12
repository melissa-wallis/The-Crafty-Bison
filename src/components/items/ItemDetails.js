// STRETCH GOAL - DETAILED VIEW OF ITEM WITH ADDL DETAILS including 
// description:
// <div className="item-description">{itemObj.description}</div>
// & price:
// <div className="item-price">{itemObj.price} Dollhairs</div>

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetails=() => {
    const [item, setItem] = useState({})
    
    const {itemId} = useParams()

    useEffect(() => {
        fetch(
            `http://localhost:3000/${itemId}`
        )
            .then((response) => response.json())
            .then((itemData) => {
                setItem(itemData)
            })
    }, [])

    return (
        <div className="item-details-container">
            <h3 className="item-details-name">Details for {item.name}</h3>
            <img src={item.image} alt={item.name} className="item-details-img" />
            <div className="item-description">{item.description}</div>
            <div className="item-price">{item.price} Dollhairs</div>
            </div>
    )
    }