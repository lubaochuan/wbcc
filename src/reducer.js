export const GET_CONTENT = 'GET_CONTENT'
export const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS'
export const GET_CONTENT_FAIL = 'GET_CONTENT_FAIL'

export default function reducer(state = {content:[]}, action) {
  switch (action.type) {
    case GET_CONTENT:
      return { ...state, loading: true }
    case GET_CONTENT_SUCCESS:
      return { ...state, loading: false, content: action.payload.data }
    case GET_CONTENT_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching content'
      }
    default:
      return state
  }
}

export function getContent() {
  return {
    type: GET_CONTENT,
    payload: {
      request: {
        url: 'screens.json'
      }
    }
  }
}
