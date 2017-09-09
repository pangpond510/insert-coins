import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgray;
  padding-top: 50px;
`

const LoginButton = styled.div`
  width: 50%;
  margin: 0px auto;
  padding: 10px 20px;
  text-align: center;
  background: cyan;
  border-radius: 25px;
  box-shadow: 5px 5px 2px #888888;
  cursor: pointer;
`

const LoginView = (props) =>
  <Background>
    <LoginButton onClick={props.onClick}>
      <h1>LOGIN</h1>
    </LoginButton>
  </Background>
    
export default LoginView;