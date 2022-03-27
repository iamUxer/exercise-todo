import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(''); // <<- 값을 가져오는 것이 아니라 단순 셋팅이기 때문에 불변성과 무관하다.

  const onChange = (e) => {
    setValue(() => e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <InserWrapper>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          placeholder="할 일을 입력하세요."
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </InserWrapper>
  );
};

const InserWrapper = styled.div`
  & form {
    display: flex;
    background: #495057;
  }
  & input,
  button {
    background: none;
    outline: none;
    border: none;
  }
  & input {
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  }
  & button {
    background: #868e96;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

export default TodoInsert;
