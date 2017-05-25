export default function Classrooms(state = [], action) {
  switch (action.type) {
    case "SET_CLASSROOMS":
      return action.payload
    default:
      return state
  }
}
