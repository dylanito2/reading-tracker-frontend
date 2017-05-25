
const defaults = {
  schoolId: 1,
  name: 'Mr. Teacher',
  email: 'teacher@school.com'
}

export default function Account(state = defaults, action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return action.payload
    default:
      return state
  }
}
