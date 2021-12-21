import React, {useState} from 'react'
import { Form , Button } from 'react-bootstrap'
import {productListing} from "../data/api"
function Addproduct (props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [category, setCategory] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const onFormSubmit = async (e) => {
      e.preventDefault();
      console.log(name, quantity, price, newPrice, photo); 
    //    const formData = new FormData();
    //    formData.append("file", photo);
    //     await singleFileUpload(formData);
    //    formData.append("title", songTitle);
    //    formData.append("artist", artistName);
    //    console.log(formData);
       
      await productListing({
        name: name,
        mrp: price,
        discountedPrice: newPrice,
        totalQuantity: quantity,
        category: category,
        imgadd: photo},
        props.user._id);

        setUploaded(true);
        console.log(photo);
}



    return (
      <div>
        <Form className="addproduct" onSubmit={onFormSubmit}>
          <Form.Label>Add new Product</Form.Label>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupNewPrice">
            <Form.Label>Product New Price</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(event) => {
                setNewPrice(event.target.value);
              }}
            />
          </Form.Group>
          
          <Button type="submit">Add New Product</Button>
        </Form>
      </div>
    );
}
export default Addproduct;

