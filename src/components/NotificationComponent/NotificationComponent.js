import React from "react";
import ReactNotification from "react-notifications-component";
 
class NotificationComponent extends React.Component {
 
  render() {
    return (
      <div className="app-content">
        <ReactNotification ref={this.notificationDOMRef} />
        <button onClick={this.addNotification} className="btn btn-primary">
          Add Awesome Notification
        </button>
      </div>
    );
  }
}

export default NotificationComponent;