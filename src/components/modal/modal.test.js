// MyComponent.test.js
/* eslint-disable jest/valid-expect */
import React from "react";
import { shallow } from "enzyme";
import Modal from "./modal";
import styles from "./modal.module.scss";
import { expect } from "chai";
 
describe("modal tests", () => {
  //   it("renders three <Modal /> components", () => {
  //     const wrapper = shallow(<Modal />);
  //     expect(wrapper.find(Modal)).to.have.lengthOf(3);
  //   });

  it("renders an `styles.darkBG`", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(styles.darkBG)).to.have.lengthOf(1);
  });
});
