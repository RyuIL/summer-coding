import React from 'react'
import { Button, Popup, Grid, Segment, Label} from 'semantic-ui-react';

class TodoItem extends React.Component{
    state = {
        isOpen : false
    }
    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleClose = () =>{    
        this.setState({isOpen : false});
    }

    handleEditClose = () => {
        this.setState({isOpen : false});
        this.props.onEditOpen();
    }
    handleRemove = (id) => {
        this.props.onRemove(id);
        this.setState({isOpen : false});
        const value = {type : "warning", message : this.props.text.input+"작업 삭제 완료", title : "삭제"}
        this.props.addNotification(value);
    }

    handleComplete = (id) => {
        this.props.onRemove(id);
        this.setState({isOpen : false});
        const value = {type : "default", message : this.props.text.input+" 작업을 완료 했습니다.", title : "완료"}
        this.props.addNotification(value);
    }
    
    render(){
        const {
            id, checked, text, onToggle, addNotification
        } = this.props;
        const {isOpen} = this.state;
        return(
            <Popup on='click' onOpen={this.handleOpen} open={isOpen} onClose={this.handleClose} flowing position="bottom right"
                content = {
                <Grid centered divided columns={1}>
                    <Grid.Column textAlign='center'>
                    <Button.Group>
                        <Button color='blue' onClick={()=>this.handleComplete(id)}>{checked ? <p>복원</p> : <p>완료</p>}</Button>
                        <Button.Or />
                        <Button color='orange' onClick={this.handleEditClose}>수정</Button>
                        <Button.Or />
                        <Button color='red' onClick={(id)=>this.handleRemove(id)} >삭제</Button>
                    </Button.Group>   
                    </Grid.Column>
                </Grid>
                }
                trigger={<Segment color={text.order ? text.order.label.color : "grey"} textAlign='left' raised
                style={{ textDecoration: checked ? "line-through" : "none" }}> 
                <Label size='medium' as='a' color={text.order ? text.order.label.color : "grey"} ribbon>
                    {(text.date.getMonth()+1)+"."+text.date.getDate()}
                </Label>
                <span style={{'font-size': 'large'}}>
                    {text.input}<br/>
                </span>
                {text.inputContent}
                </Segment>
            } />  
        )
    }
}

export default TodoItem;