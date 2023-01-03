import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const EmbroideryItems = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const localBisonUser = localStorage.getItem("bison_user")
    const bisonUserObject = JSON.parse(localBisonUser)
    
    useEffect(() => {
        fetch(`http://localhost:8088/items?itemTypeId=2`)
        .then((res) => res.json())
        .then((itemsArray) => {
            setItems(itemsArray)
        })
    }, [])

    //navigates to item details view
    const navigateToItemDetails = (itemId) => {
        navigate(`/${itemId}`)
    }

    return (
        <div className="items-container">
        {items.map((itemObj) => {
        return (
            <div className="item-card" key={itemObj.id}>
                <img
                    src={itemObj.image}
                    alt={itemObj.name}
                    className="item-img"
                    onClick={() => {
                        navigateToItemDetails(itemObj.id)
                    }}/>
            <div className="item-name">{itemObj.name}</div>    
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
                        .then (() => fetch (`http://localhost:8088/items?itemTypeId=2`))
                        .then(response => response.json())
                        .then(response => 
                            setItems(response))
                    }}>Delete</button>
                    </>
                : ""
            }
            </div>
            )
        })}
        </div>
    )
}

