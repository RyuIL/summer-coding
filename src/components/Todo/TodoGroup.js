import React from 'react'
import TodoItem from './TodoItem';

const TodosGroup = ({ 
    todos, onToggle, onRemove, onEdit, onEditOpen,
    onEditClose
}) => {

  const todoItems = todos.map(todo => {
    const {id, checked, text } = todo.toJS();
    return(
    <TodoItem
      id={id} 
      checked={checked}
      text={text}
      onRemove={onRemove}
      onToggle={onToggle}
      onEdit= {onEdit}
      onEditOpen = {onEditOpen}
      onEditClose = {onEditClose}
    />
    )    
  })
  
  return todoItems
}

export default TodosGroup;
