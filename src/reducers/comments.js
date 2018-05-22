let initialState = []

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_COMMENTS_PENDING':
        return state
    case 'FETCH_COMMENTS_FULFILLED':
      console.log('Fetch Comments Success')
        return [...action.payload.data]
    case 'FETCH_COMMENTS_REJECTED':
      console.log('Fetch Comments Failure')
        return state;
    case 'ADD_COMMENT_PENDING':
        return state;
    case 'ADD_COMMENT_FULFILLED':
      console.log('add comment success')
        return [action.payload.data, ...state]
    case 'ADD_COMMENT_REJECTED':
      console.log('add comment failure')
        return state;
    default:
        return state;
  }
}
