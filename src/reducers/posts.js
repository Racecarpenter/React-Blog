let initialState = []

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_POSTS_PENDING':
        return state;
    case 'FETCH_POSTS_FULFILLED':
      console.log('Fetch Posts Success')
        return [...action.payload.data]
    case 'FETCH_POSTS_REJECTED':
      console.log('Fetch Posts Failure')
        return state;
    case 'ADD_POST_PENDING':
        return state;
    case 'ADD_POST_FULFILLED':
      console.log('add post success')
        return [action.payload.data, ...state]
    case 'ADD_POST_REJECTED':
      console.log('add post failure')
        return state;
    default:
        return state;
  }
}
