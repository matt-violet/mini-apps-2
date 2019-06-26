import React from 'react';
import $ from 'jquery';
import Event from './Event.jsx';
import SearchBar from './SearchBar.jsx';
import ReactPaginate from 'react-paginate';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      events: [],
      pageNumber: 1,
      pageCount: 10
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/events?q=${this.state.search}&_page=${this.state.pageNumber}&_limit=10`,
      data: this.state.search,
      success: (data) => {
        this.setState({
          events: data
        })
      }
    })
  }

  handlePageClick(data) {
    var newPageNumber = data.selected;
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/events?q=${this.state.search}&_page=${newPageNumber}&_limit=10`,
      success: (success) => {
        this.setState({
          events: success,
        })
      },
      error: (error) => {
        console.log(`Error: ${error}`);
      }, 
    })
  }

  render() {
    if (!this.state.events.length) {
      return (
        <SearchBar onSubmit={this.onSubmit} onChange={this.onChange} search={this.state.search} />
      )
    } else {
      return (
        <div>
          <SearchBar onSubmit={this.onSubmit} onChange={this.onChange} search={this.state.search} /><br/><br/>
          <ReactPaginate 
            previousLabel={'Previous Events'} 
            nextLabel={'More Events'} 
            breakLabel={'...'} 
            breakClassName={'break-me'} 
            pageCount={this.state.pageCount} 
            marginPagesDisplayed={2} 
            pageRangeDisplayed={5} 
            onPageChange={this.handlePageClick} 
            containerClassName={'pagination'} 
            subContainerClassName={'pages pagination'} 
            activeClassName={'active'} 
          />
          <Event events={this.state.events} />
        </div>
      )
    }
  }
}

export default Homepage;