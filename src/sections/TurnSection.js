import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard.js";

import "./TurnSection.css";
import UpScroll from "../components/UpScroll.js";
import { Button } from "react-scroll";

class TurnSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Fullpage className="third" background={this.props.background}>
          <h3 style={{ color: this.props.color }}> {data.sections[2].title}</h3>
          <div align="right" className="form">
            <label>نام و نام خانوادگی</label>
            <input type="text" />
            <br/>
            <label>شماره تماس</label>
            <input type="number" />
            <Button>ارسال</Button>
          </div>
        </Fullpage>

        <UpScroll background={this.props.background} />
      </div>
    );
  }
}

export default TurnSection;
