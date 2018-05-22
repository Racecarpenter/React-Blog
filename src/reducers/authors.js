let initialState = []

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_AUTHORS_PENDING':
    console.log('where the authors at')
     return state;
    case 'FETCH_AUTHORS_FULFILLED':
     console.log('Fetch Author Success')
     return [...action.payload.data]
    case 'FETCH_AUTHORS_REJECTED':
     console.log('Author Failure')
     return state;
    default:
     return state;
  }
}
