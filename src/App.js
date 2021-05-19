import Menu from './components/Menu';
import TaskList from './components/TasksList';
import TaskInfo from './components/TaskInfo';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu/>
      <TaskList/>
      <TaskInfo/>
    </div>
  );
}

export default App;
