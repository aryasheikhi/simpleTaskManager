// this is an action type
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_ROLE = 'CHANGE_ROLE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const DARK_THEME = 'DARK_THEME';
export const SELECT_TASK = 'SELECT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const UPDATE_TASK = 'UPDATE_TASK';

// this is an action creator
export const addTask = (taskInfo) => {
  return {
    type: ADD_TASK,
    payload: taskInfo
  };
};

export const changeRole = role => {
  return {
    type: CHANGE_ROLE,
    payload: role
  };
};

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    payload: filter
  };
};

export const darkTheme = status => {
  return {
    type: DARK_THEME,
    payload: status
  };
};

export const selectTask = task => {
  return {
    type: SELECT_TASK,
    payload: task
  };
};

export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    payload: task
  };
};

export const changeTaskStatus = (task, status) => {
  return {
    type: CHANGE_TASK_STATUS,
    payload: {
      task,
      status
    }
  };
};

export const updateTask = (taskName, taskDescription, selectedTask) => {
  return {
    type: UPDATE_TASK,
    payload: {
      ...selectedTask,
      name: taskName,
      description: taskDescription
    }
  };
};
