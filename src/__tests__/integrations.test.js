import React from "react";
import { mount } from "enzyme";
import App from "../components/App";

let oneButton,
  twoButton,
  threeButton,
  plusButton,
  minusButton,
  timesButton,
  divideButton,
  equalsButton,
  clearAllButton,
  wrapped;

const buttonSelector = text => {
  return n => n.type() === "button" && n.text() === text;
};

beforeAll(() => {
  wrapped = mount(<App />);

  oneButton = wrapped.findWhere(buttonSelector("1"));
  twoButton = wrapped.findWhere(buttonSelector("2"));
  threeButton = wrapped.findWhere(buttonSelector("3"));
  plusButton = wrapped.findWhere(buttonSelector("+"));
  minusButton = wrapped.findWhere(buttonSelector("-"));
  timesButton = wrapped.findWhere(buttonSelector("*"));
  divideButton = wrapped.findWhere(buttonSelector("/"));
  equalsButton = wrapped.findWhere(buttonSelector("="));
  clearAllButton = wrapped.findWhere(buttonSelector("CE"));
});

afterEach(() => {
  clearAllButton.simulate("click");
});

const clickButtons = buttonsArray => {
  buttonsArray.forEach(button => {
    button.simulate("click");
  });
};

const shouldEqual = expected => {
  expect(wrapped.find(".screen").props().value).toEqual(expected);
};

it("can perform addition", () => {
  clickButtons([oneButton, plusButton, twoButton, equalsButton]);

  shouldEqual(3);
});

it("can perform subtraction", () => {
  clickButtons([threeButton, minusButton, twoButton, equalsButton]);

  shouldEqual(1);
});

it("can perform multiplication", () => {
  clickButtons([threeButton, timesButton, twoButton, equalsButton]);

  shouldEqual(6);
});

it("can perform division", () => {
  clickButtons([threeButton, divideButton, twoButton, equalsButton]);

  shouldEqual(1.5);
});
