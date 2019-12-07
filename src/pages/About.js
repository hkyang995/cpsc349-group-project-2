import React from "react";
import styled from "styled-components";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Fade,
  Jumbotron
} from 'reactstrap';
import Space from "../components/Space";
import Footer from "../components/Footer";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const StyledJumbo = styled(Jumbotron)`
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1571942676516-bcab84649e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;
const ColumnComponent = props => (
  <paragraphContainer>
    <p>{props.text}</p>
  </paragraphContainer>
);

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${'' /* max-width: 200px;
  text-align: justify; */}
`;

const LeftMargin = styled.div`
  margin-left: 40px;
  `;

export default class About extends React.Component {
  render() {
    return (
      <div>
        <StyledJumbo fluid>
          <LeftMargin>
          <h1 className="display-3">What is foodfight?</h1>
          <p className="lead">A revolutionary new way of looking at food pictures!</p>
          <hr className="my-2" />
          <p>Well It's probably a little bit more in depth than that.</p>
          <p className="lead">
          </p>
          </LeftMargin>
        </StyledJumbo>
        <ParagraphContainer>
        <Space height="100px"/>
        <p> text is here</p>
        <p> text is here</p>
        <p> text is here</p>
        <p> text is here</p>
        <Space height="200px" />
        </ParagraphContainer>
        <Footer />      
        </div>


);
}
}
