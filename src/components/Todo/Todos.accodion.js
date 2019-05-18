import React from "react";
import { List, Map } from "immutable";
import { Accordion, Label, Message, Container, Checkbox } from "semantic-ui-react";

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => (
  <li
    style={{
      textDecoration: checked ? "line-through" : "none"
    }}
    onClick={() => onToggle(id)}
    onDoubleClick={() => onRemove(id)}
  >
    {text}
  </li>
);

const defaultItems = [
  {
    id: 0,
    checked: false,
    title: "title",
    content: "content"
  },
  {
    id: 1,
    checked: true,
    title: "title",
    content: "content"
  }
];

const TodosAccdion = ({ todos, onInsert, onToggle, onRemove }) => {
  const todoItems = todos.map(todo => {
    const { id, checked, text} = todo.toJS();
    console.log(text);
    return {
      key: id,
      title: {
        content: (
          <Label
            icon = ""
            size = "large"
            color="red"
            content={text.input}
            onDoubleClick = {onToggle}
            style={{ textDecoration: checked ? "line-through" : "none" }}
          />
        )
      },
      content: {
        content: <Message info content={text.inputContent} />
      }
    };
  });

  const log = () => console.log(todoItems);
  log();
  return (
    <Container textAlign="left">
      {todoItems.size ? (
        <Accordion panels={todoItems.toJS()} />
      ) : (
        <h2>작업을 추가하세요.</h2>
      )}
    </Container>
  );
};

export default TodosAccdion;
