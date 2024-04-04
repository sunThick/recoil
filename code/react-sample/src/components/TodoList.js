import { useRecoilValue } from 'recoil';
import TodoListStats from './TodoListStats';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { filteredTodoListState } from '../selector';
  import TodoListFilters from './TodoListFilters';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default TodoList;