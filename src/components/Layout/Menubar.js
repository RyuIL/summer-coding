import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import Sidebar from './Sidebar';
export default class Menubar extends Component {
  state = {
    activeItem: 'home',
    visible : false
  }

  handleItemClick = (e, { name }) => {
    if(name === 'menu'){
      return this.setState({ visible: !this.state.visible })
    }
  }

  handleHideClick = () => this.setState({ visible: false })
  
  render() {
    const { activeItem, visible, handleHideClick } = this.state
    const { children } = this.props;

    return (
      <div>
        <Sidebar  handleVisible={visible}>
        <Menu secondary>
          <Container>
          <Menu.Item name='menu' active={activeItem === 'menu'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              {/* <Input icon='search' placeholder='Search...' /> */}
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
          </Container>
        </Menu>
          {children}
        </Sidebar>
      </div>
    )
  }
}