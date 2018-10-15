import { IAddTodoAction, TodoAction, TodoActionType  } from "../actions";
import { Todos } from "../states/TodoState";

const todos = (state: Todos, action: TodoAction): Todos => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text,
        },
      ];

    case TodoActionType.TOGGLE_TODO:
      return state.map( (todo) => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo );

    default:
      return state;
  }
};

export default todos;
