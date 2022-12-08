//for editing existing items
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditItemForm = () => {
    const [item, update] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        itemTypeId: 0
        });

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

    //pulls itemTypes from API to update itemTypes state
    const [itemTypes, setItemType] = useState([]);
    useEffect(() => {
    fetch(`http://localhost:8088/itemTypes`)
        .then((res) => res.json())
        .then((itemTypesData) => {
        setItemType(itemTypesData);
        });
    }, []);

    //function that runs when the save button is clicked - needs PUT request to replace object being edited
    const handleSaveItem = (evt) => {
        evt.preventDefault()

        return fetch(`http://localhost:8088/items/${item.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then(() => {navigate("/")})
    }

    return (
        <form className="item-form">
            <h2 className="item-form-title">Edit Item</h2>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                required autoFocus
                type="text"
                className="form-control"
                value={item.name}
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.name = evt.target.value;
                    update(copy);
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
                value={item.description}
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.description = evt.target.value;
                    update(copy);
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
                value={item.price}
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.price = evt.target.value;
                    update(copy);
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
                value={item.image}
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.image = evt.target.value;
                    update(copy);
                }}
                />
            </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <select onChange={(evt) => {
                    const copy = { ...item };
                    copy.itemTypeId = parseInt(evt.target.value);
                    update(copy);
                }}>
                    <option value={0}>Choose a Category</option>
                    {itemTypes.map((item) =>
                    <option key={`itemType--${item.id}`} value={item.id}>{item.type}</option>
                    )
                    }
                </select>
            </div>
            </fieldset>
            <button className="btn"
            onClick={(evt) => {
                handleSaveItem(evt)
            }}
            >Save Changes</button>
        </form>
        );
    };
