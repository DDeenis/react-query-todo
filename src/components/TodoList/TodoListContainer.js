import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getTodos } from '../../queries/api';
import CircleLoader from '../Loaders/CircleLoader';
import TodosList from './TodoList';

const TodoListContainer = () => {
    const pageSize = 10;
    const totalItems = 200;
    
    const [currentPage, setCurrentPage] = useState(1);
    const todosQuery = useQuery(['todos-paged', currentPage, pageSize], () => getTodos(currentPage, pageSize), { refetchOnWindowFocus: false });

    if(todosQuery.isLoading) return <CircleLoader />;

    return (
        <TodosList 
            todos={todosQuery.data}
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            refetch={todosQuery.refetch} 
            pagesCount={totalItems / pageSize}
        />
    );
}

export default TodoListContainer;