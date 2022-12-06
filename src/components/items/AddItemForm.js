//for editing existing items

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AddItemForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [item, update] = useState({
        name: "",
        description: "",
        type: "",
        price: "",

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API


        // TODO: Peform the fetch() to POST the object to the API
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Add Item Details</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Item Name"
                        value={item.name}
                        onChange={
                            (evt) => {
                                const copy = {...item}
                                copy.name = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Item Description"
                        value={item.description}
                        onChange={
                            (evt) => {
                                const copy = {...item}
                                copy.name = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Item Price"
                        value={item.price}
                        onChange={
                            (evt) => {
                                const copy = {...item}
                                copy.name = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary">
                List Item
            </button>
        </form>
    )
}