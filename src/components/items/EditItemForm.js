//for editing existing items
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditItemForm = () => {
    const [item, update] = useState({})
    //what goes here? Is it the same as what is in additemform?

    const {itemId} = useParams()
    const navigate = useNavigate()

    //pull item from API
    useEffect(() => {
        fetch(`http://localhost:8088/items/${itemId}`)
            .then(response => response.json())
            .then((itemObj) => {
                update(itemObj)
            })
    }, [itemId])

    // const handleSaveButtonClick = (event) => {
    //     event.preventDefault()

    //     // TODO: Write the fetch for the PUT request to replace the object being edited
    // }


    return <form className="itemForm">
        <h2 className="ticketForm__title">Service Ticket</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={ticket.description}
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                        }
                    }>{ticket.description}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input type="checkbox"
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={() => handleSaveButtonClick()}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}