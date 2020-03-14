import React from "react";
import { configure, shallow, render } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";

import Adapter from "enzyme-adapter-react-16";

import Landing from "../LandingPage";

import logo from "../../../app/shared/images/logo.png";

configure({ adapter: new Adapter() });

describe("Landing Page tests", function() {
  it("should render logo", () => {
    const wrapper = shallow(<Landing />);
    const Logo = <img className="bons-logo" src={logo} alt="logo" />;
    expect(wrapper).to.contain(Logo);
  });

  chai.use(chaiEnzyme());
});
