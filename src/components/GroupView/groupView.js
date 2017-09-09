import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

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

const People = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid white;
  margin: 5px;
  background: black;
  ${({ active }) => active && css`
    background: yellow;
  `}
`

class FormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

  }

  render() {
    const {submitted, members} = this.props;
    return (
      <Background>
        <Header>
          <ProgressBar value={submitted} max={members} />
          <p>{`Members: ${submitted}/${members}`}</p>
        </Header>
        <Body>
          {
            [...Array(members)].map((x, i) => <People active={i < submitted} />)
          }
        </Body> 
        <br />
        <button onClick={this.props.onBackClick}>back</button>
      </Background>
    );
  }
}

export default FormView;