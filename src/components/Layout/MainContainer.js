import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'

const MainContainer = ({todoList}) => (
  <div>
    <Container textAlign='center'><Header>TODOLIST</Header></Container>
    <Container textAlign='center'>{new Date().getMonth()+1+"."+new Date().getDate()}</Container>
    <Container textAlign='justified'>
      <Divider />
      
    </Container>
  </div>
)

export default MainContainer;
