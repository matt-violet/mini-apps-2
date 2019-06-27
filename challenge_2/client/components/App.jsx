import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      results: {}
    }
    this.handleDropDown = this.handleDropDown.bind(this)
    this.search = this.search.bind(this)
  }

  handleDropDown(e) {
    e.preventDefault()
    this.setState({
      currency: e.target.value
    }
  )}

  search() {
    axios('/currency', {
      params: {
        currency: this.state.currency
      }
    })
    .then((response) => {
      this.setState({
        results: response.data.bpi
      },
      () => {this.createChart(this.state.results)})
    })
    .catch((error) => {
      console.log('Error getting data: ', error)
    })  
  }

  componentDidMount() {
    axios('/currency')
    .then((response) => {
      this.setState({
        results: response.data.bpi
      },
      () => {this.createChart(this.state.results)})
    })
    .catch((error) => {
      console.log('Error getting data: ', error)
    })
  }

  createChart(results) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(results),
        datasets: [{
        label: 'Closing Prices',
        data: Object.values(results),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  
  render() {
    if (!this.state.results) {
     return (
       <h4>loading...</h4>
     ) 
    } else {
      return (
        <div width='40px'>
          <Search handleDropDown={this.handleDropDown} search={this.search} />
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      )
    }
  } 
}

export default App;