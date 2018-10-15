/**
 * Todo interface
 * @param completed
 * @param id
 * @param text
 */
export interface ITodo {
  completed: boolean;
  id: number;
  text: string;
}

export type Todos = ITodo[];

let initialId: number = 0;

const generateTodo = (id: number, text: string): ITodo => {
  return {
    completed: false,
    id,
    text,
  };
};

export const generateTodos = (text: string[]): ITodo[] => {
  return text.map((t) => {
    const res = generateTodo(initialId, t);
    initialId++;
    return res;
  });
};
