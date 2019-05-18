import React from 'react'
import { Header, Button, Popup, Grid, Segment, Modal, Divider} from 'semantic-ui-react';

import CalendarModal2 from 'components/TodoModal/CalendarModal2';
import PriorityDropdown from 'components/PriorityDropdown/PriorityDropdown';
import TodosInput from 'components/Todo/TodosInput';

class TodosEditViewer extends React.Component {
    
    state = {...this.state, open : false,fromChild : false};
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render(){
        const {open} = this.state;
        const { text, inputText, onEdit, onChange, onChangeContent, handleClose, id } = this.props;
        return(
        <Modal hoverable dimmer='blurring' open={open} 
        trigger={<Button color='orange' content={text} onClick={this.show} />}
        >
            <Modal.Header>작업 수정</Modal.Header>
            <Modal.Content>
            <Modal.Description>
                <TodosInput
                    onChange={onChange}
                    onChangeContent={onChangeContent}
                    inputText={inputText}
                />
                <Divider/>
                <CalendarModal2/>
                <PriorityDropdown/>
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button primary onClick={()=>{handleClose(this.state.fromChild);onEdit({id})}} content='완료'/>
            <Button onClick={()=>handleClose(this.state.fromChild)} content="닫기" />
            </Modal.Actions>
        </Modal>
        )
    }
}


export default TodosEditViewer;