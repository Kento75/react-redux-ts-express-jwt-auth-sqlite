import * as React from "react";

import * as State from "../states/TodoState";
import Todo from "./Todo";

export interface ITodoListProps {
  todos: State.Todos;
  onTodoClick: (id: number) => void;
}

class TodoList extends React.Component<ITodoListProps, {}> {
  public render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        {todos.map( (todo) => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
