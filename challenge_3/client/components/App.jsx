import React from 'react';
import Table from './Table.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: {},
      pins: null,
      frame: 0
    }
    this.executeTurn = this.executeTurn.bind(this)
    this.selectPins = this.selectPins.bind(this)
    this.calculateScore = this.calculateScore.bind(this)
  }

  executeTurn(e) {
    e.preventDefault()
    if (this.state.pins === null) {
      alert('Select number of pins')
      return;
    }
    this.state.frame++
    this.setState({
      frame: this.state.frame
    })
    this.state.scores[this.state.frame] = this.state.pins;
    this.state.pins = null;
  }

  calculateScore(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

  selectPins(num) {
    this.setState({
      pins: num
    })
  }

  render() {
    if (!this.state.scores.length) {
      return (
        <Table executeTurn={this.click} selectPins={this.selectPins} executeTurn={this.executeTurn} />
      )
    } else {
      return (
        <div>
          <Table executeTurn={this.click} selectPins={this.selectPins} executeTurn={this.executeTurn} />
          <br/>
          <ScoreBoard scores={this.state.scores} frames={this.state.frames} />
        </div>
      )
    }
  }
}

export default App;