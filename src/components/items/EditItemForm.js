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

    //pull item from API, updates item state
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

    //function that runs when the save button is clicked
    const handleSaveItem = (evt) => {
        evt.preventDefault()
        //PUT request modifies the item object
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
            <h1>Edit Item</h1>
            <fieldset>
                <input
                required autoFocus
                type="text"
                value={item.name}
                placeholder="Name"
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.name = evt.target.value;
                    update(copy);
                }}
                />
            </fieldset>
            <fieldset>
                <textarea
                required
                type="text"
                value={item.description}
                placeholder="Description"
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.description = evt.target.value;
                    update(copy);
                }}
                />
            </fieldset>
            <fieldset>
                <input
                required
                type="text"
                value={item.price}
                placeholder="Price"
                onChange={(evt) => {
                    const copy = { ...item };
                    copy.price = evt.target.value;
                    update(copy);
                }}
                />
            </fieldset>
            <fieldset>
                <select
                required
                value={item.itemTypeId}
                onChange={(evt) => {
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
            </fieldset>
                <button
                onClick={(evt) => {
                    handleSaveItem(evt)
                }}
                >Save Changes</button>
        </form>
        );
};
