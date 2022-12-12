//"homepage" displays all items before filtering

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//Use Effect pulls items from local storage, parses it into json, and uses the setter function, setItems to update the state variable items so that items now contains the items data to display to the user

export const AllItems = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    
    const localBisonUser = localStorage.getItem("bison_user")
    const bisonUserObject = JSON.parse(localBisonUser)

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

    return (
        <>
        <img className="hero" src="../../images/Banner.svg"></img>
        <div className="items-container">
        {items.map((itemObj) => {
            return <div className="item-card" value={itemObj.id} key={itemObj.id}>
                <img
                src={itemObj.image}
                alt={itemObj.name}
                className="item-img"
                onClick={() => {
                    navigateToItemDetails(itemObj.id)
                }}
                />
            <div className="item-name">{itemObj.name}</div>
            <div className="item-description">{itemObj.description}</div>
            <div className="item-price">{itemObj.price} Dollhairs</div>

            {
                bisonUserObject.staff
                ? <>
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
                </>
                : ""
            }


            </div>
        })}
        </div>
        </>
    )
}

//delete pulls item from local storage using id property, deletes that item from the API then updates items state 





