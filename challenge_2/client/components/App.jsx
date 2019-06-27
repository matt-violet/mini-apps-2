import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    axios('/currency')
    .then((response) => {
      this.setState({
        results: response.data.bpi
      })
      this.createChart(response);
    })
    .catch((error) => {
      console.log('Error getting data: ', error)
    })
  }

  createChart(response) {
    // console.log(response)
  }

  
  render() {
    return (
      <Search />
    )
  } 
}

export default App;