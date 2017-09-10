import React, { Component } from "react";
import styled from "styled-components";
import {Input, Row, Col} from "antd"
import Button from "../Button";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  height: 100%;
`;

const SearchSection = styled.div`
width: fit-content;
margin: 20px auto 40px;
display: block;
vertical-align: middle;
`

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
                <Input name={i} value={this.state.searchText[i]} onChange={this.handleInputChange} placeholder={`island ${i+1} name...`} style={{ width: "70vw", height: 50, fontSize: 25, marginBottom: 20}}/>
              ))
            }
            <Row>
              <Col span={12}>
                <Row type="flex" justify="center">
                  <Button label="Compare" icon="copy" size="20" onClick={this.handleCompareClick} />
                </Row>
              </Col>
              <Col span={11}>
                <Row type="flex" justify="center">
                  <Button label="Add more island" icon="plus-circle" size="20" onClick={this.handleAddClick} />
                </Row>
              </Col>
              </Row>
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
