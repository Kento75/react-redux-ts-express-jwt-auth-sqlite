import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { TodoActionType } from "../actions";
import { generateTodos, ITodo as TodoState } from "../states/TodoState";
import todos from "./todos";

enzyme.configure({ adapter: new Adapter() });

it("renders text when completed=true", () => {
  let state = [
    { id: 0, text: "hello", completed: false },
  ];

  state = todos(state, { type: TodoActionType.ADD_TODO, id: 1, text: "goodbye"});

  expect(state).toEqual([
    { id: 0, text: "hello", completed: false },
    { id: 1, text: "goodbye", completed: false },
  ]);
});
