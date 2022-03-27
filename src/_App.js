import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
};

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId,
      text: text,
      checked: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((removeId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => removeId !== todo.id));
  }, []);

  const onToggle = useCallback((toggleId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === toggleId
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
