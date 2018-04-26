import { TaskActions, ADD_TASK, DELETE_TASK, UPDATE_TASK, CHANGE_STATUS } from './tasks.actions';
import { Task } from './task.model';
import { TASKS } from './tasks.list';

export interface State {
  tasks: Task[];
}

const initialState: State = {
  tasks: TASKS
};

export function taskReducer(state = initialState, action: TaskActions): State {
  switch (action.type) {

    case ADD_TASK: {
      const newId = state.tasks[0].id + 1;
      return {
        tasks: [
          {
            id: newId,
            idCategory: action.idCategory,
            title: action.title,
            isDone: action.isDone,
            description: '',
          },
          ...state.tasks,
        ]
      };
    }

    case DELETE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id)
      };
    }

    case UPDATE_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            task.idCategory = action.idCategory;
            task.title = action.title;
            task.isDone = action.isDone;
            task.description = action.description;
          }
          return task;
        })
      };
    }

    case CHANGE_STATUS: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            task.isDone = !task.isDone;
          }
          return task;
        })
      };
    }

    default:
      return state;
  }
}

export const getTasks = (state: State) => state.tasks;

