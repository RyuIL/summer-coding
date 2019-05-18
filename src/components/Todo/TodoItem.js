import React from 'react'
import { Header, Button, Popup, Grid, Segment, Modal, Divider} from 'semantic-ui-react';
import TodosEditViewer from 'components/TodoModal/TodosEditViewer';
class TodoItem extends React.Component{
    state = {
        isOpen: false,
        isEditOpen : false,
    };  

    handleOpen = () => {
        this.setState({ isOpen: true });
      }
    
    handleEditClose = (dataFromChild) => {
        this.setState({ isOpen: false });
    }

    handleClose = () =>{
        this.setState({ isOpen : false});
    }

    
    render(){
        const {isOpen} = this.state;
        const isClose = this.state.isOpen 
        const {id, checked, text, onRemove, onToggle, onEdit, onChange, onChangeContent} = this.props;
        return(
            <Popup on='click' open={this.state.isOpen} onOpen={this.handleOpen} onClose={isOpen} flowing position="bottom right"
                content = {
                <Grid centered divided columns={1}>
                    <Grid.Column textAlign='center'>
                    <Button.Group>
                        <Button color='blue' onClick={()=>onToggle(id)}>{checked ? <p>복원</p> : <p>완료</p>}</Button>
                        <Button.Or />
                        <TodosEditViewer
                            id={id}
                            text='수정'
                            onEdit={onEdit}
                            inputText={text}
                            onChange={onChange}
                            onChangeContent={onChangeContent}
                            handleClose={(dataFromChild)=> this.handleEditClose(dataFromChild)}
                        />
                        <Button.Or />
                        <Button color='red' onClick={()=>onRemove(id)} >삭제</Button>
                    </Button.Group>   
                    </Grid.Column>
                </Grid>
                }
                trigger={<Segment color='red' textAlign='left' 
                style={{ textDecoration: checked ? "line-through" : "none" }}> 
                <Header>{text.input}</Header>
                {text.inputContent}
            </Segment>} />  
        )
    }
}

export default TodoItem;