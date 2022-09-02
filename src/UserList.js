import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserList = ({el}) => {
  return (
    <div style={{margin:"50px",alignItems:"center"}} >
        <Card>
      <Card.Header>{el.name}</Card.Header>
      <Card.Body>
        <Card.Title>{el.email}</Card.Title>
        <Card.Text>
          {el.id} {el.username}
         
        </Card.Text>
        <Card.Text>
          Website : {el.website}
          </Card.Text>
          <Card.Text>
          Adress : {el.address.street}
          </Card.Text>
          <Card.Text>
          Company : {el.company.name}
          </Card.Text>
        <Button variant="primary">Phone : {el.phone}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserList