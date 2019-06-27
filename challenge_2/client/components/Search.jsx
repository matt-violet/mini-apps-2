import React from 'react';

class Search extends React.Component {
  constructor(props) {
  super(props);
  }
  
  render() {
    return (
      <div>
        Find historical price data for any cryptocurrency: <br/><br/>
        <select>
          <option value="usd">USD</option>
          <option value="jpy">JPY</option>
          <option value="cny">CNY</option>
          <option value="eur">EUR</option>
        </select>
        <br/>
        <button>Search</button>
      </div>
    )
  }
}

export default Search;