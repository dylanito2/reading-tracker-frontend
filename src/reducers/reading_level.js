export default function ReadingLevel(state = [], action) {
  switch (action.type) {
    case "SET_READING_LEVEL":
      return action.readingLevels
    default:
      return state
  }
}
