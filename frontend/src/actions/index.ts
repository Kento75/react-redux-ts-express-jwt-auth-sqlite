let nextTodoId = 0;

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export interface IAddTodoAction {
  id: number;
  text: string;
  type: TodoActionType.ADD_TODO;
}

export interface IToggleTodoAction {
  id: number;
  type: TodoActionType.TOGGLE_TODO;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction;

/**
 * TODO追加アクション
 * @param text 入力値
 */
export const addTodo = (text: string): IAddTodoAction => {
  return {
    id: nextTodoId++,
    text,
    type: TodoActionType.ADD_TODO,
  };
};

/**
 * 打ち消し線表示アクション
 * @param id TODO番号
 */
export const toggleTodo = (id: number): IToggleTodoAction => {
  return {
    id,
    type: TodoActionType.TOGGLE_TODO,
  };
};
