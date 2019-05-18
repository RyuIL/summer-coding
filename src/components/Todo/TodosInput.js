import React from 'react';
import { List, Map } from 'immutable';
import { Container, Form } from 'semantic-ui-react'
const TodosInput = ({onChange, onChangeContent, inputText }) => {
  
  return (
    <Form>
      <Form.Input fluid label='작업 이름' placeholder='작업 입력...'
        name='title' id='title' onChange = {onChange}
      />
      <Form.TextArea label='내용' placeholder='내용 입력...' 
        name='content' id='content' onChange = {onChangeContent}
      />
    </Form>
  );
};

TodosInput.defaultProps = {
  input: '',
  inputContent : ''
};

export default TodosInput;