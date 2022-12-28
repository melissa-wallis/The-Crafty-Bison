//for adding new items to the store
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

//set default properties for object
export const AddItemForm = () => {
  const [item, update] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    itemTypeId: 0,
  });

  const navigate = useNavigate();

  //Initialize itemTypes list
  const [itemTypes, setItemType] = useState([]);

  //pulls itemTypes from API to update itemTypes state//
  useEffect(() => {
    fetch(`http://localhost:8088/itemTypes`)
      .then((res) => res.json())
      .then((itemTypesData) => {
        setItemType(itemTypesData);
      });
  }, []);

  //state that holds the image file selected
  const [imageSelected, setImageSelected] = useState("");

  //function that runs when List Item button is clicked
  const handleSaveItem = (evt) => {
    evt.preventDefault();

    //Upload the image to Cloudinary platform
    //Followed tutorial: https://www.youtube.com/watch?v=Y-VgaRwWS3o
    const formData = new FormData();
    //Constructing the form data - add the imported file and upload preset
    formData.append("file", imageSelected);
    formData.append("upload_preset", "Crafty-Bison1");
    //Use Axios API to post photo to Cloudinary platform
    Axios.post(
      "https://api.cloudinary.com/v1_1/dkst6uh8j/image/upload",
      formData
    ).then((response) => {
      const itemToSaveToAPI = {
        name: item.name,
        description: item.description,
        price: item.price,
        image: response.data.url,
        itemTypeId: item.itemTypeId,
      };

      //POST request modifies the item state by adding a new item
      return fetch("http://localhost:8088/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemToSaveToAPI),
      })
        .then((response) => response.json())
        .then(() => {
          navigate("/");
        });
    });
  };

  return (
    <form className="item-form">
      <h2>Add Item to Store</h2>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input
          required
          autoFocus
          type="text"
          // className="form-control"
          placeholder="Item name"
          onChange={(evt) => {
            const copy = { ...item };
            copy.name = evt.target.value;
            update(copy);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Description:</label>
        <input
          required
          autoFocus
          type="text"
          // className="form-control"
          placeholder="Item description"
          onChange={(evt) => {
            const copy = { ...item };
            copy.description = evt.target.value;
            update(copy);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="price">Price:</label>
        <input
          required
          autoFocus
          type="text"
          // className="form-control"
          placeholder="Item price"
          onChange={(evt) => {
            const copy = { ...item };
            copy.price = evt.target.value;
            update(copy);
          }}
        />
      </fieldset>

      <fieldset>
        <input
          type="file"
          onChange={(evt) => {
            setImageSelected(evt.target.files[0]);
          }}
        />
      </fieldset>

      <fieldset>
        <select
          onChange={(evt) => {
            const copy = { ...item };
            copy.itemTypeId = parseInt(evt.target.value);
            update(copy);
          }}
        >
          <option value={0}>Choose a Category</option>
          {itemTypes.map((item) => (
            <option key={`itemType--${item.id}`} value={item.id}>
              {item.type}
            </option>
          ))}
        </select>
      </fieldset>

      <button
        className="btn"
        onClick={(evt) => {
          handleSaveItem(evt);
        }}
      >
        List Item
      </button>
    </form>
  );
};
