export default function posts (state = [], 
action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      console.log({action})
      return [...action.posts]
    default: 
      return state
  }
}
