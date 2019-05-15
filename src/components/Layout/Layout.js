import React from "react";
import Menubar from "./Menubar";
import Footer from './Footer';
import { Container, Divider } from 'semantic-ui-react'

const Layout = ({ children, todolist }) => (
  <Menubar>
    <Container>
    
    <Container textAlign='center'><b>ProjectName</b></Container>
    <Container textAlign='right'>Right Aligned</Container>
    <Container textAlign='justified'>
      <Divider />
      {children}
    </Container>
    <Footer/>
    </Container>
  </Menubar>
);


export default Layout;