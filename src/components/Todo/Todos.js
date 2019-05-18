import React from 'react'
import TodoItem from './TodoItem';
import TodosViewer from 'components/TodoModal/TodosViewer';
const Todos = ({ todos, onToggle, onRemove, onInsert, onEdit, onChange, onChangeContent }) => {

  const todoItems = todos.map(todo => {
    const {id, checked, text} = todo.toJS();
    return(
    <TodoItem
      id={id} 
      checked={checked}
      text={text}
      onChange={onChange}
      onChangeContent={onChangeContent}
      onRemove={onRemove}
      onToggle={onToggle}
      onEdit= {onEdit}
    />
    )    
  })
  
  return(
    <div>
      {todoItems}
      <TodosViewer
        onInsert={onInsert}
        onChange={onChange}
        onChangeContent={onChangeContent}
      />
    </div>
  )
}

export default Todos;
