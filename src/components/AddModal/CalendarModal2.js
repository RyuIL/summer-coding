import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
 
class CalendarModal2 extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
        <DatePicker
          minDate = {new Date()}
          onChange={this.onChange}
          value={this.state.date}
        />
    );
  }
}

export default CalendarModal2;