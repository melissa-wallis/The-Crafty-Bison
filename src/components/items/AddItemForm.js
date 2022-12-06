//for editing existing items

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//set default properties for object
export const AddItemForm = () => {
    const [item, update] = useState({
        name: "",
        description: "",
        type: 0,
        price: "",
        image: "",
    })


    const [itemType, setItemType] = useState([])

    const navigate = useNavigate()


    //pulls itemTypes from API to update itemType state//
    useEffect(() => {
        fetch(`http://localhost:8088/itemTypes`)
            .then((res) => res.json())
            .then((itemTypesData) => {
                setItemType(itemTypesData)
            })
    }, [])

    //function that runs when List Item button is clicked
    const handleSaveItem = (evt) => {
        evt.preventDefault()

        // TODO: Peform the fetch() to POST the object to the API
    }

    return (
        <form className="item-form">
            <h2 className="item-form-title">Add Item to Store</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Item name"
                        value={item.name}
                        onChange={
                            (evt) => {
                                const copy = {...item}
                                copy.name = evt.target.value
                                update(copy)
                            }}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Item description"
                        value={item.description}
                        onChange={
                            (evt) => {
                                const copy = {...item}
                                copy.name = evt.target.value
                                update(copy)
                            }}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Item price"
                        value={item.price}
                        onChange={
                            (evt) => {
                                const copy = {...item}
                                copy.price = evt.target.value
                                update(copy)
                            }}
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="imgUrl">Image URL: </label>
                    <input
                        required
                        id="imgUrl"
                        type="text"
                        className="form-control"
                        placeholder="example.com"
                        value={item.image}
                        onChange={(event) => {
                            const copy = { ...item }
                            copy.image = event.target.value
                            update(copy)
                        }}
                    />
                </div>
            </fieldset>

            <button className="btn btn-primary">
                List Item
            </button>
        </form>
    )
}