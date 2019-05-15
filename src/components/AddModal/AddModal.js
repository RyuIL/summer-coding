import React from 'react'
import { Button, Header, Modal, Icon, Input, Form, TextArea, Divider } from 'semantic-ui-react'

import CalendarModal2 from './CalendarModal2';
import PriorityDropdown from 'components/PriorityDropdown/PriorityDropdown';
const AddModal = () => {

    return(
        
        <Modal dimmer='blurring' trigger={<Button icon><Icon name="plus"/></Button>} centered={false}>
            <Modal.Header>작업 추가 하기</Modal.Header>
            
            <Modal.Content image>            
                
                <Modal.Description>
                    <Form>
                        <Form.Input fluid label='작업 이름' placeholder='작업 입력...' />
                        <Form.TextArea label='내용' placeholder='내용 입력...' />
                    </Form>
                    <Divider/>
                    <CalendarModal2/>
                    <PriorityDropdown/>
                </Modal.Description>
                
            </Modal.Content>
            
            <Modal.Actions>
                <Button color='black' onClick={this}>  
                취소
                </Button>
                <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="등록"
                onClick={this}
                />
            </Modal.Actions>
            
        </Modal>
        
    )
}

export default AddModal;
