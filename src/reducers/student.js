export default function Student(state = null, action) {
  switch (action.type) {
    case "SET_STUDENT":
      debugger
      return action.student
    default:
      return state
  }
}
