import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItem from './MovieItem';
import { Grid, Row, Col } from 'react-bootstrap';

import moviesBySearchTerm from 'sel/moviesBySearchTerm';

@connect(
  state => ({
    movies: moviesBySearchTerm(state)
  })
)
class MovieList extends Component {

  render() {
    const movieItems = this.props.movies.map(movie => (
      <Col xs={3} key={movie.id}>
        <MovieItem movie={movie} />
      </Col>
    ));

    return (
      <Grid fluid>
        <Row>
          {movieItems}
        </Row>
      </Grid>
    );
  }

}

export default MovieList;