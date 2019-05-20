import React, { Component } from 'react'
import { Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { children} = this.props;
    const {visible} = this.state;

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleHideClick}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>Home</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible} onClick={this.handleSidebarHide}>
            <Segment basic>
                {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}