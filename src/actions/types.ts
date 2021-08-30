import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodos,
    deleteTodo
};


// Type Union to avoid multiple or statements in reducers
export type Action = FetchTodosAction | DeleteTodoAction;