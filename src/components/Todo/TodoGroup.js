import React from 'react'
import TodoItem from './TodoItem';

const TodosGroup =({ 
    todos, onToggle, onRemove, onEdit, onEditOpen,
    onEditClose, addNotification, now
}) => {

  const todoItems = todos.map(todo => {
    const {id, checked, text} = todo.toJS();
    if(
      (text.date.getYear()>=now.getYear()) &&
      (text.date.getMonth()>=now.getMonth()) &&
      (text.date.getDate()>=now.getDate())
    ){
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
        addNotification = {addNotification}
    />
    )
    }else{
      const value = {type : "warning", message : text.input+"작업이 기간이 지나 삭제되었습니다.", title : "기간 만료"}
      addNotification(value);
      onRemove(id);
    }
  })
  
  return todoItems
}

export default TodosGroup;
