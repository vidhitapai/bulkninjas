import React from 'react'
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
  <Card.Img variant="top" className="cardimg" src="https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80" />
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
    <Button className="AddtoCart">Add To Cart</Button>
  </Card.Body>
</Card>


        </>
    )
}

export default Productcard
