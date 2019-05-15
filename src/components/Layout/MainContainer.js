import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

const MainContainer = ({todoList}) => (
  <div>
    <Container textAlign='center'><b>ProjectName</b></Container>
    <Container textAlign='right'>Right Aligned</Container>
    <Container textAlign='justified'>
      <Divider />
      
    </Container>
  </div>
)

export default MainContainer;
