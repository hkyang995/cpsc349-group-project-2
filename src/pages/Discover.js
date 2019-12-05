import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Space from "../components/Space";
import FooterComponent from "../components/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
  background-repeat: repeat;
  background-size: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CardLayout = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default class Discover extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Space height="100px" />
          <Alert variant={"light"}>
            <h2>Discover New Food To Fight About</h2>
          </Alert>
          <Space height="25px" />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Enter Your City"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Space height="200px" />
          <CardContainer>
            <CardLayout />
            <Space width="40px" />
            <CardLayout />
            <Space width="40px" />
            <CardLayout />
          </CardContainer>
          <Space height="200px" />
        </Container>
        <FooterComponent />
      </div>
    );
  }
}
