import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>Score</h4>
        <br/>
        {Object.keys(this.props.scores).map((key) => {
          return <span>{'Frame ' + key + ' score: ' + this.props.scores[key]}<br/></span>
        })}
      </div>
    )
  }
}

export default ScoreBoard;