import { Grid } from '@material-ui/core';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { StyledTodosList } from './styled';

const TodosList = ({ todos }) => {
    const todoItems = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)

    return (
        <StyledTodosList>
            <Grid container direction='column' alignItems='flex-start' justify='center'>
                { todoItems }
            </Grid>

        </StyledTodosList>
    );
}

export default TodosList;