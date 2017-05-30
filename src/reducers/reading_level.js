export default function ReadingLevel(state = [], action) {
  switch (action.type) {
    case "SET_READING_LEVEL":
      return action.dataSeries
    default:
      return state
  }
}
