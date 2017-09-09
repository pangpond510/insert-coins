import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgray;
  padding: 10px 10px 0px;
`

const UserSection = styled.div`
  display: flex;
`

const Seperator = styled.hr`
  margin: 10px 0px;
`

const Pic = styled.div`
  width: 70px;
  height: 70px;
  background: black;
`

const TextBox = styled.div`
  margin-left: 20px;
  text-align: center;
`

const Button = styled.div`
  width: 70%;
  height 50px;
  margin: 20px auto;
  line-height: 50px;
  text-align: center;
  background: cyan;
  border-radius: 25px;
  box-shadow: 5px 5px 2px #888888;
`

const MainView = (props) =>
  <Background>
    <UserSection>
      <Pic />
      <TextBox>
        <h3>you don't submit for this month</h3>
        <h4>username</h4>
      </TextBox>
    </UserSection>
    <Seperator />
    <div>
      <Button onClick={props.onFormClick}>FORM</Button>
      <Button onClick={props.onInfoClick}>DIESEL INFOMATION</Button>
      <Button>GROUP</Button>
      <Button>OVERVIEW</Button>
    </div>
  </Background>
    
export default MainView;