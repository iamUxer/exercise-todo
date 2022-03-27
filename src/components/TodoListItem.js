import React from 'react';
import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { checked, id, text } = todo;

  return (
    <ItemWrapper className="TodoListItem-virtualized" style={style}>
      <div
        className={(checked && 'checked') || ''}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{text}</div>
      </div>
      <div>
        <MdRemoveCircleOutline onClick={() => onRemove(id)} />
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  width: calc(100% - 32px) !important;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & > div {
    &:first-child {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex: 1;
      align-items: cneter;
      & svg {
        font-size: 1.5rem;
      }
      & div {
        margin-left: 0.5rem;
        flex: 1;
        line-height: 19px;
      }
      &.checked {
        & svg {
          color: #22b8cf;
        }
        & div {
          color: #adb5bd;
          text-decoration: line-through;
        }
      }
    }
    &:last-child {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: #ff6b6b;
      cursor: pointer;
      &:hover {
        color: #ff8787;
      }
    }
  }
  & + & {
    border-top: 1px solid #dee2e6;
    &:nth-child(even) {
      background: #f8f9fa;
    }
  }
`;

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
