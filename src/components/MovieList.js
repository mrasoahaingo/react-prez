import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItem from './MovieItem';
import { Grid, Row, Col } from 'react-bootstrap';


@connect(
  state => ({
    movies: state.movies
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