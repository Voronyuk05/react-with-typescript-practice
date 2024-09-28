
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './store/selectors';
import { addTodo, removeTodo } from './store/todosSlice';


function App() {
  const items = useSelector(getTodos)
  const dispatch = useDispatch()

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id))
  }

  const handleAddTodo = (todoText: string) => {
    dispatch(addTodo(todoText))
  }

  return (
    <div>
      <TodoForm addTodo={handleAddTodo}/>
      <ul>
        {items.map((item) => (
          <TodoItem item={item} removeTodo={handleRemoveTodo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
