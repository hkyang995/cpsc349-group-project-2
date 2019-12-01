import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Space from "../components/Space";

const Container = styled.div`
  height: 100%;
  padding-left: 150px;
  padding-top: 200px;
  padding-bottom: 200px;
  color: #343434;
  background-color: rgba(248, 247, 216, 0.7);
`;
const StyledJumbo = styled(Jumbotron)`
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderText = styled.h1`
  font-size: 100px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <StyledJumbo fluid>
          <Container>
            <HeaderText>Food Fight!</HeaderText>
            <p>Arguing about food has never been easier.</p>
            <a href="/register">
              <Button variant="light" size="lg">
                Register Now
              </Button>
            </a>
          </Container>
        </StyledJumbo>
        <Space height="200px" />
        <InfoContainer>Hi</InfoContainer>
        <Space height="200px" />
        <InfoContainer>
          <h1>What are you waiting for?</h1>
        </InfoContainer>
        <Space height="50px" />
        <InfoContainer>
          <Button variant="primary" size="lg">
            Login
          </Button>
          <Space width="100px" />
          <Button variant="secondary" size="lg">
            Register
          </Button>
        </InfoContainer>
        <Space height="200px" />
      </div>
    );
  }
}
