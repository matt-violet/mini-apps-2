import React from 'react';

class Search extends React.Component {
  constructor(props) {
  super(props);
  }
  
  render() {
    return (
      <div>
        Find historical price data for any cryptocurrency: <br/><br/>
        <select onChange={this.props.handleDropDown}>
          <option>USD</option>
          <option>JPY</option>
          <option>CNY</option>
          <option>EUR</option>
        </select>
        <br/>
        <button onClick={this.props.search}>Search</button>
        <br/><br/>
      </div>
    )
  }
}

export default Search;