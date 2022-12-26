// STRETCH GOAL - DETAILED VIEW OF ITEM WITH ADDL DETAILS

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetails=() => {
    const [item, setItem] = useState([])

    const {itemId} = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/items/${itemId}`)
            .then((response) => response.json())
            .then((itemData) => {
                setItem(itemData)
                console.log(item)
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