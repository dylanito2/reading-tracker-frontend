export default function StudentSearch(state = null, action) {
  switch (action.type) {
    case "SET_STUDENT_MATCHES":
      return action.payload
    default:
      return state
  }
}
