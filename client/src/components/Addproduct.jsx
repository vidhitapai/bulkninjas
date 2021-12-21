import React from 'react'
import { Form , Button } from 'react-bootstrap'

const { useState } = React,
      { render } = ReactDOM,

const [Name, setName] = useState("");
const [Quantity, setQuantity] = useState("");
const [Price, setPrice] = useState("");
const [NewPrice, setNewPrice] = useState("");
const [Photo, setPhoto] = useState("");

onFormSubmit = e => {
    e.preventDefault()
    console.log(Name, Quantity, Price, NewPrice , Photo)
    setName()
    setQuantity()
    setPrice()
    setNewPrice()
    setPhoto()
  }
const Addproduct = () => {


        
    return (
        <div>
        <Form className="addproduct" onSubmit={onFormSubmit}>
            <Form.Label>Add new Product</Form.Label>
            <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder=""  onChange={(event) => {setName(event.target.value);}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control type="text" placeholder="" onChange={(event) => {setQuantity(event.target.value);}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" placeholder="" onChange={(event) => {setPrice(event.target.value);}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupNewPrice">
            <Form.Label>Product New Price</Form.Label>
            <Form.Control type="text" placeholder="" onChange={(event) => {setNewPrice(event.target.value);}}/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Photo of Product</Form.Label>
            <Form.Control type="file" onChange={(event) => {setPhoto(event.target.value);}}/>
            <Button type="submit">
            Add New Product
            </Button>
            </Form.Group>
        </Form>
        </div>
    )
}
export default Addproduct;