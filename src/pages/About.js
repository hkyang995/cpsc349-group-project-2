import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Fade,
  Jumbotron
} from 'reactstrap';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">What is foodfight?</h1>
          <p className="lead">A revolutionary new way of looking at food pictures!</p>
          <hr className="my-2" />
          <p>Well It's probably a little bit more in depth than that.</p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>

);
}
}
