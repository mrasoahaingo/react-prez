import expect from 'expect';
import appReducer from 'reducers';

describe('Reducers', () => {

  it('should return set the search term', () => {

    const action = { type: 'SEARCH', payload: 'Batman' };

    const initialState = {};

    const newState = appReducer(initialState, action);

    expect(newState).toEqual({
      searchTerm: 'Batman'
    });

  });
});
