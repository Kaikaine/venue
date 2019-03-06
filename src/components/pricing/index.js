import React, { Component } from "react";
import UButton from "./../utils/UButton";
import Zoom from "react-reveal/Zoom";
export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    pos: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis soluta sed explicabo dolor aut illum in impedit enim provident!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis soluta sed explicabo dolor aut illum in impedit enim provident!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis soluta sed explicabo dolor aut illum in impedit enim provident!"
    ],
    links: ["google.com", "google.com", "google.com"],
    delay: [500, 300, 500]
  };

  showBoxes = () => {
    return this.state.prices.map((box, i) => (
      <Zoom
      key={i}
      delay={this.state.delay[i]}
      >
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.pos[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <UButton
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={this.state.links[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
