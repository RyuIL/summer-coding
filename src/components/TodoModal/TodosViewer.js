import React from 'react'
import { Button, Modal, Divider } from 'semantic-ui-react'

import CalendarModal2 from './CalendarModal2';
import PriorityDropdown from 'components/PriorityDropdown/PriorityDropdown';
import TodosInput from 'components/Todo/TodosInput';
class TodosViewer extends React.Component {
    handleSubmit = () => {
        let value;
        this.props.modalOpen ? this.props.onInsert() : this.props.onEdit();
        this.props.modalOpen ? value = {type : "success", message : "작업 등록 완료", title : "등록"} 
        : value = {type : "info", message : "작업 수정 완료", title : "수정"}
        this.props.onModalClose();
        this.props.addNotification(value);
    }

    render(){
        const {
            onChange, onChangeContent, todos, modalOpen, onModalOpen, onOrderChange,
            onModalClose, editModalOpen, onChangeDate, date, input, inputContent, order, 
            } = this.props;
        return(   
            
            <Modal dimmer='blurring' open={editModalOpen||modalOpen} 
            closeIcon onClose={onModalClose} trigger={<Button icon='plus' 
            onClick={onModalOpen} style={{"margin-top" : "1em"}}/>} centered={false}
            >
                {
                    modalOpen ? <Modal.Header>작업 등록</Modal.Header>
                     : <Modal.Header>작업 수정</Modal.Header>
                }
                <Modal.Content image>            
                    <Modal.Description>
                        <TodosInput
                            onChange={onChange}
                            onChangeContent={onChangeContent}
                            editModalOpen={editModalOpen}
                            input={input}
                            inputContent={inputContent}
                        />
                        <Divider/>
                        <CalendarModal2 onChangeDate={onChangeDate} date={date}/>
                        <PriorityDropdown
                            order={order}
                            onOrderChange={onOrderChange}
                        />
                    </Modal.Description>
                </Modal.Content>
                
                <Modal.Actions>
                    <Button color='black' onClick={onModalClose}>  
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