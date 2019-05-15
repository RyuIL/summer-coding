import React from 'react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

  class CalendarModal extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };
    }
   
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
    }
   
    render() {
      return (
          <DateInput
            disable = 'true'
            label = '날짜'
            dateFormat = 'YYYY-MM-DD'
            popupPosition='bottom left'
            duration='0'
            name="dateTime"
            placeholder="Date Time"
            value={this.state.dateTime}
            iconPosition="left"
            onChange={this.handleChange}
          />
      );
    }
  }
export default CalendarModal;