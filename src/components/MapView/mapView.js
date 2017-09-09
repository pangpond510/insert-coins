import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgray;
  padding: 10px 10px 0px;
`

const MapView = (props) =>
  <Background>
    <button onClick={props.onBackClick}>back</button>
  </Background>
    
export default MapView;