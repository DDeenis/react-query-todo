import { Card, CardActionArea, CardContent, Checkbox, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { StyledTodoItem, TodoInfo } from './styled';

const TodoItem = ({ todo }) => {
    const [isChecked, setIsChecked] = useState(todo.completed);
    const [isRaised, setIsRaised] = useState(false);

    return (
        <Grid container item xs={12} spacing={3}>
            <StyledTodoItem>
                <Card raised={isRaised} onMouseEnter={() => setIsRaised(true)} onMouseLeave={() => setIsRaised(false)}>
                    <CardActionArea>
                        <CardContent>
                            <TodoInfo checked={isChecked}>
                                <Typography variant='h6'>{todo.title}</Typography>
                                <Checkbox color='primary' checked={isChecked} value={isChecked} onChange={() => setIsChecked(!isChecked)} />
                            </TodoInfo>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledTodoItem>
        </Grid>
    );
}

export default TodoItem;