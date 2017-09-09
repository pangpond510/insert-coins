import React, { Component } from "react";
import styled from "styled-components";

import { Row, Card } from "antd";
import Text from "../Text";
import AvgTable from "../avgDataTable"

import { COLOR } from "../../styles/variables";

const InfoViewDefaultProps = {};

const MobileCard = styled(Card)`
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

const content2 = {
  width: "60%",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  lineHeight: "30px",
  verticalAlign: "middle"
};

const date = new Date();

class InfoView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      minPrice: 0,
      minName: "",
      avg: 0,
      count: 0,
      apiGet: () => {
        // console.log(filter);
        const api = `http://localhost:3000/api/DieselData`;
        return fetch(api, {
          method: 'get'
        });
      }
    };
  }

  componentWillMount() {
    this.state.apiGet()
      .then((res) => res.json())
      .then((res) => {
        let avg = {};
        for(let i in res) {
          if(avg[res[i].island] === undefined) {
            avg[res[i].island] = {
              price: res[i].price,
              count: 1
            }
          }
          else {
            const avgPrice = (avg[res[i].island].price*avg[res[i].island].count + res[i].price)/(avg[res[i].island].count+1);
            avg[res[i].island].price = avgPrice;
            avg[res[i].island].count += 1;
          }
        }
        let min = -1;
        let sum = 0 ;
        let count = 0;
        let name = "";
        Object.keys(avg).forEach((island)=>{
          if(avg[island].price < min || min === -1){
            min = avg[island].price;
            name = island;
          }
          sum += avg[island].price * avg[island].count;
          count += avg[island].count;
        })
        this.setState({
          data: avg,
          minPrice: min,
          minName: name,
          avg: sum/count,
          count: count
        })
        console.log(this.state);
      })
      .catch((err) => {console.log(err);});

  }

  render() {
    const { onBackClick } = this.props;
    return (
      <div>
        <Row type="flex" justify="center" style={{ padding: "20px 5px 0px 5px" }}>
          <MobileCard style={{ width: 300 }}>
            <Card.Grid style={header}>
              <Text text="Average Price" size="27px" color={COLOR.green2} bold />
              <br />
              <Text
                text={`at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                size="14px"
                color={COLOR.lightGrey4}
              />
            </Card.Grid>
            <Card.Grid style={content1}>
              <Text text="Diesel price in thailand" size="12px" color={COLOR.primaryDark} />
              <br />
              <Text text={`${Math.round(this.state.avg * 100) / 100} Baht/Litr`} size="23px" color={COLOR.peach} bold />
            </Card.Grid>
          </MobileCard>
        </Row>
        <Row type="flex" justify="center" style={{ padding: "10px 5px 0px 5px" }}>
          <MobileCard style={{ width: 300 }}>
            <Card.Grid style={header}>
              <Text text="Lowest Price" size="27px" color={COLOR.facebook} bold />
              <br />
              <Text
                text={`at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                size="14px"
                color={COLOR.lightGrey4}
              />
            </Card.Grid>
            <Card.Grid style={content2}>
              <Text text="Lowest price starts from" size="12px" color={COLOR.primaryDark} />
              <br />
              <Text text={`${this.state.minPrice} Baht/Litr`} size="23px" color={COLOR.peach} bold />
              <br />
              <Text text={`at ${this.state.minName}`} size="14px" color={COLOR.lightGrey4} />
              <br />
            </Card.Grid>
          </MobileCard>
        </Row>
        <Row type="flex" justify="center" style={{ padding: "20px 20px 20px 20px" }}>
          <AvgTable data={this.state.data} />
        </Row>
        <button onClick={onBackClick}>back</button>
      </div>
    );
  }
}

InfoView.defaultProps = InfoViewDefaultProps;

export default InfoView;
