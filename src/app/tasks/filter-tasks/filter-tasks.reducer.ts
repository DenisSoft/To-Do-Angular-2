import {FilterTasksActions, UPDATE_FILTER_TASKS} from './filter-tasks.actions';

export interface State {
  filterTask: {
    title: string,
    isDone: boolean
  };
}

const initialState: State = {
  filterTask: {
    title: '',
    isDone: false,
  }
};

export function filterTasksReducer(state = initialState, action: FilterTasksActions): State {
  switch (action.type) {

    case UPDATE_FILTER_TASKS:

      return {
        filterTask: {
          title: action.title,
          isDone: action.isDone,
        }
      };

    default:
      return state;
  }
}

export const getFilterTasks = (state: State) => state.filterTask;

