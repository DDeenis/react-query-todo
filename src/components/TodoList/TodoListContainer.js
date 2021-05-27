import React from 'react';
import { useQuery } from 'react-query';
import { getTodos } from '../../queries/api';
import TodosList from './TodoList';

const TodoListContainer = () => {
    const todosQuery = useQuery('todos-paged', () => getTodos(), { refetchOnWindowFocus: false });

    if(todosQuery.isLoading) return <div>Loading...</div>

    return (
        <TodosList todos={todosQuery.data} />
    );
}

export default TodoListContainer;