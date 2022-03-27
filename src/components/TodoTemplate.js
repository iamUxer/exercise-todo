import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <title>일정 관리</title>
      <div>{children}</div>
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  width: 512px;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
  & title {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #22b8cf;
    color: white;
    height: 4em;
    font-size: 1.5rem;
    & + div {
      background: white;
      height: 100%;
    }
  }
`;

export default TodoTemplate;
