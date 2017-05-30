export default function Toggle(state = false, action) {
  switch (action.type) {
    case "TOGGLE_STUDENT_VIEW":
      let newToggle = state ? false : true
      return newToggle
    default:
      return state
  }
}
