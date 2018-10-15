import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTodo, TodoAction } from "../actions";
import AddButton, { IAddTodoButtonProps } from "../components/AddTodoButton";
import { Todos } from "../states/TodoState";

const mapStateToProps = (state: Todos): {} => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>): IAddTodoButtonProps => {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    },
  };
};

export default connect<{}, IAddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(AddButton);
