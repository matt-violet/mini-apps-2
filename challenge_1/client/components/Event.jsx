import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.events.map((event) => {
          return <div> 
            <br/>
            <div className='event' key={event.category2}>
            <strong>Date: </strong> {event.date}<br/>
            <strong>Place: </strong> {event.category2}<br/>
            <strong>Description: </strong>{event.description}<br/><br/>
          </div>
          </div>
        })}
      </div>
    )
  }

}

export default Event;