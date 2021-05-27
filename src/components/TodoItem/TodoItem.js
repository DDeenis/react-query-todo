import { Card, CardActionArea, CardContent, Checkbox, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { StyledTodoItem, TodoInfo } from './styled';

const TodoItem = ({ todo }) => {
    return (
        <Grid container item xs={12} spacing={3}>
            <StyledTodoItem>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <TodoInfo>
                                <Typography variant='h6'>{todo.title}</Typography>
                                <Checkbox checked={todo.done} value={todo.done} onClick={e => console.log(e.target.value)} />
                            </TodoInfo>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledTodoItem>
        </Grid>
    );
}

export default TodoItem;