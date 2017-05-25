export default function Student(state = null, action) {
  switch (action.type) {
    case "SET_STUDENT":
      return action.student
    default:
      return state
  }
}
