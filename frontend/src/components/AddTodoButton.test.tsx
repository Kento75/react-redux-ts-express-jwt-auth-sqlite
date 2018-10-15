import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import AddTodoButton from "./AddTodoButton";

enzyme.configure({ adapter: new Adapter() });

it("renders input", () => {
  const onDummy = (s: string) => { return; };
  const wrapper = enzyme.shallow(<AddTodoButton onSubmit={onDummy} />);
  wrapper.setState({ input: "hello" });
  expect(wrapper.find("button").text()).toEqual("Add Todo");
});
