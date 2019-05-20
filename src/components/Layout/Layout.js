import React from "react";
import Menubar from "./Menubar";
import Footer from './Footer';
import { Container, Divider, Header } from 'semantic-ui-react'

const Layout = ({ children, todolist }) => (
  <Menubar>
    <Container>
    <Container textAlign='center'><Header>TODOLIST</Header></Container>
    <Container textAlign='center'>{new Date().getMonth()+1+"월"+new Date().getDate()+"일"}</Container>
    <Container textAlign='justified'>
      <Divider />
      {children}
    </Container>
    <Footer/>
    </Container>
  </Menubar>
);


export default Layout;