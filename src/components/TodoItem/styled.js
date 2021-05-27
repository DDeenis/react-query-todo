import styled from 'styled-components';

export const StyledTodoItem = styled.div`
    width: 50vw;
    margin: 18px;
`;

export const TodoInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
    color: ${({ checked }) => checked ? '#d1d9d9' : '#000'};
    text-decoration-color: ${({ checked }) => checked ? 'auto' : 'transparent'};
    transition: all .2s ease;
`;

export const TodoControls = styled.div`
  
`;
