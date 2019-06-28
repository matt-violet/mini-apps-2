import React from 'react';
// import Frame from './Frame.jsx';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>Score</h4>
        <br/>
        {this.props.scores.map((score) => {
          return 'Frame ' + this.props.frames + ' score: ' + score
        })}
      </div>
    )
  }

}

export default ScoreBoard;