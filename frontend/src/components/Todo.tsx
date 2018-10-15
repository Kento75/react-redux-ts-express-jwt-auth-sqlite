import * as React from "react";

interface ITodoProps {
  completed: boolean;
  text: string;
  onClick: () => void;
}

class Todo extends React.Component<ITodoProps, {}> {
  public render() {
    const { completed, text, onClick } = this.props;
    return (
      <li onClick={ onClick } style={ { textDecoration: completed ? "line-through" : "none" } }>
      { text }
      </li>
    );
  }
}

export default Todo;
