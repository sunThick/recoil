import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../selector';

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUnCompleteNum } =
    useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
      <li>完了の数:{totalCompletedNum}</li>
      <li>未完了の数:{totalUnCompleteNum}</li>
    </ul>
  );
}

export default TodoListStats;