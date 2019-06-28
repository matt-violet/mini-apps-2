import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <table border='1px'>
            <td onClick={() => {this.props.selectPins(0)}} >0</td>
            <td onClick={() => {this.props.selectPins(1)}} >1</td>
            <td onClick={() => {this.props.selectPins(2)}} >2</td> 
            <td onClick={() => {this.props.selectPins(3)}} >3</td>
            <td onClick={() => {this.props.selectPins(4)}} >4</td>
            <td onClick={() => {this.props.selectPins(5)}} >5</td> 
            <td onClick={() => {this.props.selectPins(6)}} >6</td>
            <td onClick={() => {this.props.selectPins(7)}} >7</td>
            <td onClick={() => {this.props.selectPins(8)}} >8</td> 
            <td onClick={() => {this.props.selectPins(9)}} >9</td>
            <td onClick={() => {this.props.selectPins(10)}} >10</td>
        </table>     
        <br/>
        <button onClick={this.props.executeTurn}>Bowl!</button> 
      </div>
    )
  }
}

export default Table;