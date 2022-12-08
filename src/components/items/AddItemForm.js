//for adding new items to the store
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//set default properties for object
export const AddItemForm = () => {
    const [item, update] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    itemTypeId: 0
    });

    const [itemTypes, setItemType] = useState([]);
    const navigate = useNavigate();

  //pulls itemTypes from API to update itemTypes state//
    useEffect(() => {
    fetch(`http://localhost:8088/itemTypes`)
        .then((res) => res.json())
        .then((itemTypesData) => {
        setItemType(itemTypesData);
        });
    }, []);

    //function that runs when List Item button is clicked, contains POST request
    const handleSaveItem = (evt) => {
    evt.preventDefault();
    {fetch('http://localhost:8088/items', {
            method: "POST",
            headers: {"Content-Type": "application/json",
        },
        body: JSON.stringify(item),
        })
        .then(response => response.json())
        .then(() => {
            navigate('/')
        })
        }
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
            placeholder="Item description"
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
            placeholder="Item price"
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
            placeholder="example.com"
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
        >List Item</button>
    </form>
    );
};