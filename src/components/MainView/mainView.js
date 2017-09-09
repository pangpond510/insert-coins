import React from 'react';
import styled from 'styled-components';
import profilePic from '../../img/user-icon.jpg'

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

const Pic = styled.img`
  width: 80px;
  height: 80px;
  border: 2px solid darkgrey;
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
      <Pic src={profilePic} alt="Profile" />
      <TextBox>
        <h3>you don't submit for this month</h3>
        <h4>username</h4>
      </TextBox>
    </UserSection>
    <Seperator />
    <div>
      <Button onClick={props.onFormClick}>FORM</Button>
      <Button onClick={props.onInfoClick}>DIESEL INFOMATION</Button>
      <Button onClick={props.onGroupClick}>GROUP</Button>
      <Button>OVERVIEW</Button>
    </div>
  </Background>
    
export default MainView;