import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Dropdown, Container } from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { handleVisible, children} = this.props;
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
            <Dropdown text='Shopping' pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Header>Categories</Dropdown.Header>
                    <Dropdown.Item>
                    <Dropdown text='Clothing'>
                        <Dropdown.Menu>
                        <Dropdown.Header>Mens</Dropdown.Header>
                        <Dropdown.Item>Shirts</Dropdown.Item>
                        <Dropdown.Item>Pants</Dropdown.Item>
                        <Dropdown.Item>Jeans</Dropdown.Item>
                        <Dropdown.Item>Shoes</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Womens</Dropdown.Header>
                        <Dropdown.Item>Dresses</Dropdown.Item>
                        <Dropdown.Item>Shoes</Dropdown.Item>
                        <Dropdown.Item>Bags</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>Home Goods</Dropdown.Item>
                    <Dropdown.Item>Bedroom</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Order</Dropdown.Header>
                    <Dropdown.Item>Status</Dropdown.Item>
                    <Dropdown.Item>Cancellations</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
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