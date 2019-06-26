import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input placeholder="Enter an event!" onChange={this.props.onChange} value={this.props.search}></input>
        <input type="submit" value="search" />
      </form>
    )
  }
}

export default SearchBar;