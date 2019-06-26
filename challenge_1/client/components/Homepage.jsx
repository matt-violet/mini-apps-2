import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('clicked')
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="Enter an event!" onChange={this.onChange} value={this.state.search}></input>
        <input type="submit" value="search" />
      </form>
    )
  }
}

export default Homepage;