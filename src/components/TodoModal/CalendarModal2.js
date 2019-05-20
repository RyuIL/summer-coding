import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
 
class CalendarModal2 extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => {
    date ? this.props.onChangeDate(date) : this.props.onChangeDate(new Date());
  }
 
  render() {
    const {date} = this.props;
    return (
        <DatePicker
          minDate = {new Date()}
          onChange={this.onChange}
          value={date ? date : new Date()}
        />
    );
  }
}

export default CalendarModal2;