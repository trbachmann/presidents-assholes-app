export const currentPartyReducer = (state = 'All', action) => {
  switch(action.type) {
    case 'SET_PARTY':
      return action.filter
    default:
      return state;
  }
}