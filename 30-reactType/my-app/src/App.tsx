import './App.css';
import { NewTodo } from './components/NewTodo';
import Todos from './components/Todos';
import TcontexProvider from './store/todo-contex';

function App(){
  
  return (
    <TcontexProvider>
      <div>
        <NewTodo/>
        <Todos/>
      </div>
    </TcontexProvider>
  );
}

export default App;
