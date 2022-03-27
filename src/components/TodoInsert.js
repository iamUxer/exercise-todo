import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue((preValue) => (preValue = e.target.value)); // 함수형 업데이터
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
