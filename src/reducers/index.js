export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}