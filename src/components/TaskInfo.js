import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskStatus, deleteTask, selectTask, updateTask } from "../redux/actions";

function TaskInfo() {
  const selectedTask = useSelector(state => state.selectedTask);
  const possibleFilters = useSelector(state => state.possibleFilters);
  const [taskType, setTaskType] = useState(selectedTask.status);
  const role = useSelector(state => state.role);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState(selectedTask.name);
  const [taskDescription, setTaskDescription] = useState(selectedTask.description);

  useEffect(() => {
    setTaskName(selectedTask.name)
    setTaskDescription(selectedTask.description)
    setTaskType(selectedTask.status)
  }, [selectedTask]);

  function handleSetTaskType(e, filter) {
    setTaskType(filter);
    dispatch(changeTaskStatus(selectedTask, filter));
  }

  function handleDeleteTask(e) {
    dispatch(deleteTask(selectedTask));
    dispatch(selectTask({}));
    setTaskName('');
    setTaskDescription('');
  }

  function handleCancel() {
    dispatch(selectTask({}));
    setTaskName('');
    setTaskDescription('');
  }

  function handleSaveChanges() {
    dispatch(updateTask(taskName, taskDescription, selectedTask))
  }


  return (
    <div className="task-info-container">

      <div className="task-info">

        <div className='task-type-container'>
          {possibleFilters.map((filter, index) => {
            if (filter === 'All') return;
            return (
              <button
                key={index}
                className={filter === taskType && 'activated'}
                onClick={e => handleSetTaskType(e, filter)}
                disabled={Object.keys(selectedTask).length === 0}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className='task-content'>
          <div className='task-name'>
            <textarea
              placeholder='Subject'
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              disabled={Object.keys(selectedTask).length === 0}
            />
          </div>

          <div className='task-description'>

            <textarea
              placeholder='Description'
              value={taskDescription}
              onChange={e => setTaskDescription(e.target.value)}
              disabled={Object.keys(selectedTask).length === 0}
            />


          </div>

        </div>

        <div className='task-info-actions-container'>
          <div className='task-info-actions'>
            {Object.keys(selectedTask).length > 0 ? (
              <>
                <button className='save-button' onClick={handleSaveChanges} disabled={selectedTask.id === null}>
                  save
                </button>

                <button className='cancel-button' onClick={handleCancel} disabled={selectedTask.id === null}>
                  cancel
                </button>
              </>
            ) : <div ></div>}
            {role === 'admin' && <div className='task-delete-action'>
              {Object.keys(selectedTask).length > 0 && (
                <button onClick={e => handleDeleteTask(e)} disabled={selectedTask.id === null}>
                  delete task
                </button>
              )}
            </div>}

          </div>
        </div>

      </div>

    </div>
  );
}

export default TaskInfo;
