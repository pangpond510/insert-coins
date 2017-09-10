import React from 'react';
import styled from 'styled-components';
import map from '../../img/MapLookAround.png'

const Container = styled.div`
  padding: 20px;
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 10px 0px;
`

const Head = styled.th`
  font-size: 14px;
`

const Cell = styled.td`
  text-align: left;
  font-size: 14px;
`

const MapView = (props) =>
  <Background>
    <h1>around you</h1>
    <br />
    <img src={map} alt="Map" width="100%" height="auto" />
    <br />
    <br />
    <Container>
      <h2 style={{textAlign:"left"}}>Ranking...</h2>
      <table>
        <tr>
          <Head style={{width:"100px"}}>name</Head>
          <Head style={{width:"60px"}}>percentage</Head>
        </tr>
        <tr>
          <Cell>1. Ko Bumba</Cell>
          <Cell>95%</Cell>
        </tr>
        <tr>
          <Cell>2. Ko Fi ja</Cell>
          <Cell>80%</Cell>
        </tr>
        <tr>
          <Cell>3. Ko Aroon</Cell>
          <Cell>60%</Cell>
        </tr>
        <tr>
          <Cell>4. Ko Adang</Cell>
          <Cell>45%</Cell>
        </tr>
        <tr>
          <Cell>1. Ko Ra Wi</Cell>
          <Cell>25%</Cell>
        </tr>
      </table>
    </Container>
    
    <button onClick={props.onBackClick}>back</button>
  </Background>
    
export default MapView;