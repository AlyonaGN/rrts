import { Todo, FetchTodosAction, fetchTodos } from '../actions';
import { ActionTypes } from '../actions/types';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';


export const todosReducer = (
    state: Todo[] = [],
    action: FetchTodosAction) => {
        switch (action.type) {
            case ActionTypes.fetchTodos: 
                return action.payload;
            default:
                return state;
        }
};