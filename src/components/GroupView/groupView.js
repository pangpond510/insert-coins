import React from "react";
import styled from "styled-components";
import { Progress, Row, Col, Icon } from "antd";
import Text from "../Text";
import Button from "../Button";

import { COLOR } from "../../styles/variables";

const Background = styled.div`padding: 20px;`;

const Header = styled(Row)`
  background-color: white;
  padding: 20px 10px 20px 20px;
  margin-bottom: 20px;
`;

const Body = styled.div`text-align: center;`;

const colorList = [COLOR.twitter, COLOR.peach, COLOR.valid, COLOR.facebook, COLOR.mustard];

const shuffle = a => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

class FormView extends React.Component {
  render() {
    const { submitted, members, onBackClick } = this.props;
    var people = [...Array(members)].map((x, i) => {
      if (i < submitted) return 1;
      else return 0;
    });
    shuffle(people);
    return (
      <div>
        <Header>
          <Col xs={8}>
            <Progress type="circle" width={100} percent={submitted / members * 100} />
          </Col>
          <Col xs={16}>
            <Text
              text={`Members : ${submitted}/${members}`}
              size="20px"
              color={COLOR.primaryDark}
              style={{ lineHeight: "90px" }}
            />
          </Col>
        </Header>
        <Background>
          <Body>
            {people.map((x, i) => {
              if (x === 1)
                return (
                  <Icon
                    key={i}
                    type="smile"
                    style={{
                      fontSize: 50,
                      padding: 5,
                      color: colorList[Math.floor(Math.random() * (4 - 0)) + 0]
                    }}
                  />
                );
              else return <Icon key={i} type="frown-o" style={{ fontSize: 50, padding: 5 }} />;
            })}
          </Body>
          <br />
          <Row type="flex" justify="center" style={{ padding: "10px 5px 20px 5px" }}>
            <Button type="secondary" label="Back" onClick={onBackClick} />
          </Row>
        </Background>
      </div>
    );
  }
}

export default FormView;
