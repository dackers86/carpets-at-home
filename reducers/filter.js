const filter = (state, action) => {
  switch (action.type) {
    case 'ADD_NAME_FILTER':
      return {
        name : action.name
      }
    default:
      return state
  }
}
