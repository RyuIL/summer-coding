import React from 'react'
import { Button, Header, Modal, Icon, Input, Form, TextArea, Divider } from 'semantic-ui-react'

import CalendarModal2 from './CalendarModal2';
import PriorityDropdown from 'components/PriorityDropdown/PriorityDropdown';
import TodosInput from 'components/Todo/TodosInput';
class TodosViewer extends React.Component {
    state = {...this.state, open : false};

    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    handleSubmit = () => {
        this.props.onInsert();
        this.close();
    }
    render(){
        const {open} = this.state;
        const {onChange, onChangeContent, todos} = this.props;
        return(   
            <Modal dimmer='blurring' open={open} trigger={<Button icon='plus' onClick={this.show} style={{"margin-top" : "1em"}}/>} centered={false}
            >
                <Modal.Header>작업 추가 하기</Modal.Header>
                <Modal.Content image>            
                    <Modal.Description>
                        <TodosInput
                            onChange={onChange}
                            onChangeContent={onChangeContent}
                        />
                        <Divider/>
                        <CalendarModal2/>
                        <PriorityDropdown/>
                    </Modal.Description>
                </Modal.Content>
                
                <Modal.Actions>
                    <Button color='black' onClick={this.close}>  
                    취소
                    </Button>
                    <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content="등록"
                    onClick={this.handleSubmit}
                    />
                </Modal.Actions>
            </Modal>
            
        )
    }
}

export default TodosViewer;


//