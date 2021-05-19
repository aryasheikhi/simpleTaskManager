import { 
  ADD_TASK, 
  CHANGE_ROLE, 
  CHANGE_FILTER, 
  DARK_THEME, 
  SELECT_TASK, 
  DELETE_TASK,
  CHANGE_TASK_STATUS,
  UPDATE_TASK
} from './actions';

const initialState = {
  tasks: [
    // {
    //   id: 0,
    //   name: 'test',
    //   description: 'this is a test task',
    //   status: 'new', // and then theres 'ongoing' and 'done'
    // }
  ],
  role: 'admin',
  possibleRoles: ['admin', 'manager', 'user'],
  possibleFilters: ['New', 'Ongoing', 'Done', 'All'],
  counter: 1,
  filterBy: 'All',
  darkTheme: false,
  selectedTask: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.counter,
            ...action.payload
          }
        ],
        counter: ++state.counter
      };

    case CHANGE_ROLE:
      return {
        ...state,
        role: action.payload
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filterBy: action.payload
      };

    case DARK_THEME:
      return {
        ...state,
        darkTheme: action.payload
      };

    case SELECT_TASK:
      return {
        ...state,
        selectedTask: action.payload
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task.id !== action.payload.id && task;
        })
      };

    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.task.id) {
            return {
              ...task,
              status: action.payload.status
            };
          } else {
            return task;
          }
        })
      };

    case UPDATE_TASK:
      return {
        ...state,
        selectedTask: action.payload,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task, 
              name: action.payload.name,
              description: action.payload.description
            }
          } else return task;
        })
      }

    default:
      return state;
  }
};
