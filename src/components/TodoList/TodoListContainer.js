import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTodo, getTodos } from '../../queries/api';
import CircleLoader from '../Loaders/CircleLoader';
import TodosList from './TodoList';

const TodoListContainer = () => {
    const pageSize = 10;
    const totalItems = 200;
    
    const queryClient = useQueryClient();
    const [currentPage, setCurrentPage] = useState(1);
    const todosQuery = useQuery(['todos-paged', currentPage, pageSize], () => getTodos(currentPage, pageSize), { refetchOnWindowFocus: false, keepPreviousData: true });
    // eslint-disable-next-line no-unused-vars
    const todosMutation = useMutation('add-todo', addTodo, { 
        onSuccess: () => queryClient.invalidateQueries('todos-paged'),
    });

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