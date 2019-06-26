import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.events.map((event) => {
          return <div key={event.category2}>
            <strong>Date: </strong> {event.date}<br/>
            <strong>Place: </strong> {event.category2}<br/>
            <strong>Description: </strong>{event.description}<br/><br/>
            ----------------------------------------------------------------------------------
            <br/><br/>
          </div>
        })}
      </div>
    )
  }

}

export default Event;