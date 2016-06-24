import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormControl } from 'react-bootstrap';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  search: term => dispatch({
    type: 'SEARCH',
    payload: term
  })
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
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
    this.props.search(this.state.value);
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