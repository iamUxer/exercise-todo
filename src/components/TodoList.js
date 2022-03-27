import React, { useCallback, useEffect, useState } from 'react';
import { List } from 'react-virtualized';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <ListWrapper
      width={512}
      height={window.innerHeight - 139}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

const ListWrapper = styled(List)`
  min-height: 320px;
  height: 100%;
  overflow-y: auto;
`;

export default React.memo(TodoList);
