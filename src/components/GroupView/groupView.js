import React from 'react';
import styled from 'styled-components';
import boyDark from '../../img/boy-dark.png'
import boyLight from '../../img/boy.png'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: lightgray;
`
const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProgressBar = styled.progress`
  width: 60%;
  margin-right: 20px;
`

const Pic = styled.img`
  width: 27px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
`

const FormView = ({submitted, members, onBackClick}) =>
  <Background>
    <Header>
      <ProgressBar value={submitted} max={members} />
      <p>{`Members: ${submitted}/${members}`}</p>
    </Header>
    <Body>
      {
        [...Array(members)].map((x, i) => {
          if(i < submitted) return <Pic src={boyLight} alt="submitted" />
          else return <Pic src={boyDark} alt="not submitted" />
        })
      }
    </Body> 
    <br />
    <button onClick={onBackClick}>back</button>
  </Background>

export default FormView;