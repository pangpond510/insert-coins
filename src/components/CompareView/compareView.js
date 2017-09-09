import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  height: 100%;
`;

const SearchSection = styled.div`
  display: block;
  text-align: left;
  padding-top: 30px;
`

const Input = styled.input`
  padding: 0px 10px;
  width: 70%;
  font-size: 30px;
  margin: 20px 80px;
`;

const Button = styled.button`
  height: 50px;
  font-size: 20px;
  padding: 0px 30px;
  margin: 20px;
`;

class CompareView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearch: false,
      searchBox: 2,
      searchText: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    const array = this.state.searchText;
    array[name] = target.value;

    this.setState({
      searchText: array,
    });
  }

  handleCompareClick() {
    this.setState({
      isSearch: true,
    })
    console.log(this.state.searchText);
  }

  handleAddClick() {
    const count = this.state.searchBox + 1 > 4 ? 4 : this.state.searchBox + 1;
    this.setState({
      searchBox: count,
    })
  }

  render() {
    return (
      <Container>
        {
          
          !this.state.isSearch &&
          <SearchSection>
            {
              [...Array(this.state.searchBox)].map((x,i) => (
                <Input name={i} value={this.state.searchText[i]} onChange={this.handleInputChange} placeholder={"island name..."} />
              ))
            }
            <div style={{marginLeft: "80px"}}>
              <Button onClick={this.handleCompareClick}>COMPARE</Button>
              <Button onClick={this.handleAddClick}>ADD ISLAND</Button>
            </div>
            
          </SearchSection>
        }  
        {
          this.state.isSearch && <div />
        }
      </Container>
    );
  }
}

export default CompareView;
