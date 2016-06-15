import React, { Component } from 'react';

import SearchForm from './SearchForm';
import MovieList from './MovieList';

import { Grid, Col } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Col className="sidebar">
          <SearchForm />
        </Col>
        <Col className="content">
          <MovieList />
        </Col>
      </Grid>
    );
  }
}
