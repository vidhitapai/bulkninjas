import React from 'react'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
function Viewproducts(props){
    return (
        <>
           <Card style={{ width: '35rem',
                          backgroundColor: 'white',
                          border:'1px solid black',
                          padding: '15px',
                          borderRadius: '10px',
                          margin: '5rem ',
                          marginTop: '10rem',
                          justifyContent: 'center',
                          alignItems: 'center'
            }}>
  <Card.Img variant="top" className="cardimg" src="https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80" />
  <Card.Body>
    <Card.Title> Product Name</Card.Title>
    <Card.Text>
  <Container fluid>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    </Row>
    <Row>
    <Col>3 of 3</Col>
  </Row>
</Container>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </>
    )
}

export default Viewproducts
