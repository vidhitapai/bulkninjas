import React, {useState} from 'react'
import {Card, Button, Row, Col, Container, Table} from 'react-bootstrap'
function Productcard(props){

    
    return (
        <>
           <Card style={{ width: '35rem',
                          backgroundColor: 'white',
                          padding: '15px',
                          borderRadius: '10px',
                          margin: '6rem ',
                          justifyContent: 'space-evenly',
                          marginTop: '10rem',
                          marginBottom: '0rem',
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'inline-block'
            }}>
  <Card.Img variant="top" className="cardimg" src={props.imgadd} />
  <Card.Body>
    
    <Card.Text>
        <Table className="react-bs-container-body" >
            <thead>
                <tr>
                    <th>{props.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><del>{props.mrp}</del> </td>
                    <td>{props.totalQuantity}</td>
                </tr>
                <tr>
                    <td><b>{props.discountedPrice}</b></td>
                    </tr>
            </tbody>
        </Table>
    </Card.Text>
    <Button className="AddtoCart" onClick={(event) => {
        props.setCart((prev) => [ ...prev, props.product])
    }}>Add To Cart</Button>
  </Card.Body>
</Card>


        </>
    )
}

export default Productcard
