import expect from 'expect';
import appReducer from 'reducers';
import {createStore} from 'redux';

describe('Reducers', () => {

  it('should return set the search term', () => {

    const action = { type: 'SEARCH', payload: 'Batman' };

    const initialState = {};

    const newState = appReducer(initialState, action);

    expect(newState).toEqual({
      searchTerm: 'Batman'
    });

  });

  it('should update the store when dispatching', () => {
    const store = createStore(appReducer, {});
    store.dispatch({
      type: 'SEARCH',
      payload: 'Avengers'
    });
    expect(store.getState()).toEqual({searchTerm: 'Avengers'})
  });
});
