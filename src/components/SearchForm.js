import React, { Component } from 'react';

import { FormControl } from 'react-bootstrap';

class SearchForm extends Component {
  state = {
    value: ''
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl type="text"
                     placeholder="Search"
                     onChange={this.handleChange}/>
      </form>
    );
  }
}

export default SearchForm;