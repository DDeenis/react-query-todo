import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { StyledTodosList } from './styled';

const TodosList = ({ todos, currentPage, setCurrentPage }) => {
    const todoItems = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

    return (
        <StyledTodosList>
            <Grid container direction='column' alignItems='flex-start' justify='center'>
                { todoItems }
            </Grid>

            <Pagination count={20} color='primary' page={currentPage} onChange={(e, page) => setCurrentPage(page)} />
        </StyledTodosList>
    );
}

export default TodosList;