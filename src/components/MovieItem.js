import React, { Component } from 'react';

import { Thumbnail } from 'react-bootstrap';

class MovieItem extends Component {

  render() {
    const { movie } = this.props;

    return (
      <Thumbnail className="item" src={`https://image.tmdb.org/t/p/w396${movie.poster_path}`} alt="242x200">
        <h3>{movie.title}</h3>
      </Thumbnail>
    );
  }

}

export default MovieItem;