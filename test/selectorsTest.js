import expect from 'expect';
import moviesBySearchTerm from 'sel/moviesBySearchTerm';

describe('Selectors', () => {
  it('should return all when term is empty', () => {

    const movies = [
      {title: 'Batman'},
      {title: 'Avengers'}
    ];

    const searchTerm = '';

    const filteredMovies = moviesBySearchTerm({ movies, searchTerm });

    expect(filteredMovies).toEqual(movies);

  });
  it('should return filtered movies', () => {

    const movies = [
      {title: 'Batman'},
      {title: 'Avengers'}
    ];

    const searchTerm = 'Bat';

    const filteredMovies = moviesBySearchTerm({ movies, searchTerm });

    expect(filteredMovies).toEqual([
      {title: 'Batman'}
    ]);

  });
});
