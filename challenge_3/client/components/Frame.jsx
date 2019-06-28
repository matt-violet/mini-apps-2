import React from 'react';

class Frame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.scores.map((score) => {
          return 'Frame ' + this.props.frames + ' score: ' + score
        })}
        <br/><br/>
      </div>
    )
  }

}

export default Frame;