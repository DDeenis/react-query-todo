import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getTodos } from '../../queries/api';
import TodosList from './TodoList';

const TodoListContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const todosQuery = useQuery(['todos-paged', currentPage], () => getTodos(currentPage), { refetchOnWindowFocus: false });

    if(todosQuery.isLoading) return <div>Loading...</div>

    return (
        <TodosList todos={todosQuery.data} currentPage={currentPage} setCurrentPage={setCurrentPage} refetch={todosQuery.refetch} />
    );
}

export default TodoListContainer;