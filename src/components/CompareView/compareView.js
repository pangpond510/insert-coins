import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card, Input } from "antd";
import Button from "../Button";
import compareGraph from "../../img/Compare1.png";
import Text from "../Text";

import { COLOR } from "../../styles/variables";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  height: 100%;
`;

const SearchSection = styled.div`
  width: fit-content;
  padding: 50px 0px !important;
  margin: 0px auto;
  display: block;
  vertical-align: middle;
`;
const InfoCard = styled(Card)`
  box-shadow: 0 1.5px 9px rgba(0, 0, 0, 0.2);
  border-color: transparent;
`;

const header = {
  width: "40%",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  verticalAlign: "middle"
};

const content1 = {
  width: "60%",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  lineHeight: "45px",
  verticalAlign: "middle"
};

const date = new Date();

class CompareView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearch: false,
      searchBox: 2,
      searchText: {},
      avgText: {},
      apiGet: filter => {
        // console.log(filter);
        const api = `http://localhost:3000/api/DieselData?filter=${JSON.stringify(filter)}`;
        return fetch(api, {
          method: "get"
        });
      }
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
      searchText: array
    });
  }

  handleCompareClick() {
    this.setState({
      isSearch: true
    });
    for (let key in this.state.searchText) {
      if (this.state.searchText.hasOwnProperty(key)) {
        const island = this.state.searchText[key];
        const filter = {
          where: { island: island }
        };

        this.state
          .apiGet(filter)
          .then(res => res.json())
          .then(res => {
            let sumPrice = 0;
            let count = 0;
            for (let i in res) {
              sumPrice += res[i].price;
              count++;
            }
            const tmp = this.state.avgText;
            tmp[key] = isNaN(sumPrice / count) ? 0 : sumPrice / count;
            this.setState({
              avgText: tmp
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    console.log(this.state);
  }

  handleAddClick() {
    const count = this.state.searchBox + 1 > 4 ? 4 : this.state.searchBox + 1;
    this.setState({
      searchBox: count
    });
  }

  render() {
    return (
      <Container>
        {!this.state.isSearch && (
          <SearchSection>
            {[...Array(this.state.searchBox)].map((x, i) => (
              <Input
                name={i}
                key={i}
                value={this.state.searchText[i]}
                onChange={this.handleInputChange}
                placeholder={`island ${i + 1} name...`}
                style={{ width: "70vw", height: 50, fontSize: 25, marginBottom: 20 }}
              />
            ))}
            <Row>
              <Col span={12}>
                <Row type="flex" justify="center">
                  <Button
                    label=" Compare"
                    icon="copy"
                    size="20"
                    onClick={this.handleCompareClick}
                  />
                </Row>
              </Col>
              <Col span={11}>
                <Row type="flex" justify="center">
                  <Button
                    label=" Add more island"
                    icon="plus-circle"
                    size="20"
                    onClick={this.handleAddClick}
                  />
                </Row>
              </Col>
            </Row>
          </SearchSection>
        )}
        {this.state.isSearch && (
          <div>
            <br />
            <br />
            <Col span={13} offset={1}>
              <img src={compareGraph} alt="Compare Graph" width="100%" height="auto" />
            </Col>
            <Col span={9}>
              {Object.keys(this.state.searchText).map(key => (
                <Row type="flex" justify="center" style={{ marginBottom: "20px" }}>
                  <InfoCard style={{ width: "350" }}>
                    <Card.Grid style={header}>
                      <Text text="Average Price" size="24px" color={COLOR.green2} bold />
                      <br />
                      <Text
                        text={`at ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                        size="14px"
                        color={COLOR.lightGrey4}
                      />
                    </Card.Grid>
                    <Card.Grid style={content1}>
                      <Text
                        text={`Diesel price in ${this.state.searchText[key]}`}
                        size="12px"
                        color={COLOR.primaryDark}
                      />
                      <br />
                      <Text
                        text={`${Math.round(this.state.avgText[key] * 100) / 100} Bahts/Litr`}
                        size="20px"
                        color={COLOR.peach}
                        bold
                      />
                    </Card.Grid>
                  </InfoCard>
                </Row>
              ))}
            </Col>
          </div>
        )}
      </Container>
    );
  }
}

export default CompareView;
