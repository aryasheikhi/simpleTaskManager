import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, selectTask } from "../redux/actions";

function TasksList() {
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const tasks = useSelector(state => state.tasks);
  const role = useSelector(state => state.role);
  const filterBy = useSelector(state => state.filterBy);
  const dispatch = useDispatch();

  const createNewTask = (e) => {
    const newTask = {
      name: newTaskName,
      description: newTaskDescription,
      status: (filterBy !== 'All') ? filterBy : 'New'
    };

    dispatch(addTask(newTask));
    setNewTaskName('');
    document.getElementById('nameTag').focus();
  }

  return (
    <div className="task-list-container">

      <div className='list-type-container'>
        <span>
          {filterBy} Tasks
        </span>
      </div>

      <div className="task-list">
        {tasks.filter(task => {
          if ((task.status === filterBy) || filterBy === 'All') return task
        }).map((task, index) => {
          return (
            <div key={index} id='task_preview' className="task-preview">

              <div className="task-preview-name">
                <span>
                  {task.name}
                </span>
              </div>

              <div className="task-preview-status">
                <span>
                  {task.status}
                </span>
              </div>

              <div id={task.id} className="task-preview-more" onClick={e => dispatch(selectTask(task))}>
                <img src={process.env.PUBLIC_URL + '/vectors/info-circle-solid.svg'} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      {role !== 'user' && <>
        <div className='add-new-task-container'>

          <div className="add-new-task">

            <span className={'add-new-task-placeholder'} onClick={e => document.getElementById('nameTag').focus()}>
              {!newTaskName && 'task name'}
            </span>

            <div className='add-new-task-input-tag'>
              <input
                id='nameTag'
                type="text"
                name='name'
                value={newTaskName}
                onChange={e => setNewTaskName(e.target.value)}
              />
            </div>

            <div className='add-new-task-add-button'>
              <button onClick={createNewTask} disabled={!newTaskName}>
                <img src={process.env.PUBLIC_URL + '/vectors/plus-solid.svg'} />
              </button>
            </div>

          </div>
        </div>
      </>}

    </div>
  );
}

export default TasksList;