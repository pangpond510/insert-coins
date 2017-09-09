import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card, Input, Icon } from "antd";

import Text from "../Text";

import { COLOR } from "../../styles/variables";
import EachPrice from "../../img/EachPrice.png";
import EachConsumed from "../../img/EachConsumed.png";
import EachApplication from "../../img/EachApplication.png";
import Map from "../../img/Map.png";
import RawDataTable from "../rawDataTable";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  height: 100%;
  padding: 10px;
`;

const SearchSection = styled.div`
  width: fit-content;
  margin: 20px auto 40px;
  display: flex;
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

class IndivView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearch: false,
      island: "",
      searchText: "",
      avgPrice: 0,
      totalVolumn: 0,
      data: [],
      apiGet: filter => {
        // console.log(filter);
        const api = `http://localhost:3000/api/DieselData?filter=${JSON.stringify(filter)}`;
        return fetch(api, {
          method: "get"
        });
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearchClick() {
    this.setState({
      isSearch: true,
      island: this.state.searchText
    });

    const filter = {
      where: { island: this.state.searchText }
    };

    this.state
      .apiGet(filter)
      .then(res => res.json())
      .then(res => {
        let sumPrice = 0;
        let sumVolumn = 0;
        let count = 0;
        for (let i in res) {
          sumPrice += res[i].price;
          sumVolumn += res[i].amount;
          count++;
        }
        this.setState({
          data: res,
          avgPrice: isNaN(sumPrice / count) ? 0 : sumPrice / count,
          totalVolumn: sumVolumn
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <SearchSection>
          <Input
            name="searchText"
            value={this.state.searchText}
            onChange={this.handleInputChange}
            onPressEnter={this.state.searchText && this.handleSearchClick}
            style={{ width: "70vw", height: 50, fontSize: 25 }}
            placeholder={"island name..."}
          />
          <Icon
            type="search"
            onClick={this.state.searchText && this.handleSearchClick}
            style={{
              paddingLeft: 10,
              fontSize: 40,
              color: COLOR.twitter,
              cursor: "pointer"
            }}
          />
        </SearchSection>
        {this.state.isSearch && (
          <div>
            <Row>
              <Col span={8} offset={1}>
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
                        text={`Diesel price in ${this.state.island}`}
                        size="12px"
                        color={COLOR.primaryDark}
                      />
                      <br />
                      <Text
                        text={`${Math.round(this.state.avgPrice * 100) / 100} Baht/Litr`}
                        size="20px"
                        color={COLOR.peach}
                        bold
                      />
                    </Card.Grid>
                  </InfoCard>
                </Row>
                <Row type="flex" justify="center">
                  <InfoCard style={{ width: "350" }}>
                    <Card.Grid style={header}>
                      <Text text="Total Volume" size="24px" color={COLOR.green2} bold />
                      <br />
                      <Text
                        text={`at ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                        size="14px"
                        color={COLOR.lightGrey4}
                      />
                    </Card.Grid>
                    <Card.Grid style={content1}>
                      <Text
                        text={`Diesel volume in ${this.state.island}`}
                        size="12px"
                        color={COLOR.primaryDark}
                      />
                      <br />
                      <Text
                        text={`${Math.round(this.state.totalVolumn * 100) / 100} Litr/Month`}
                        size="20px"
                        color={COLOR.peach}
                        bold
                      />
                    </Card.Grid>
                  </InfoCard>
                </Row>
              </Col>
              <Col span={13} offset={1}>
                <Text text={this.state.island} size="40px" color={COLOR.primaryDark} />
                <Row justify="center">
                  <RawDataTable data={this.state.data} />
                </Row>
              </Col>
            </Row>
            <Row style={{ padding: 20 }}>
              <img src={EachPrice} alt="EachPrice" width="49%" height="auto" />
              <img src={EachConsumed} alt="EachConsumed" width="41%" height="auto" />
            </Row>
            <Row style={{ padding: 20 }}>
              <img src={EachApplication} alt="EachApplication" width="45%" height="auto" />
              <img src={Map} alt="Map" width="45%" height="auto" />
            </Row>
          </div>
        )}
      </Container>
    );
  }
}

export default IndivView;
