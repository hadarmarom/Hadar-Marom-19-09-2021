
const INITIAL_STATE = {
  favorites: [],
  isDarkMode: true,
  currCity: {
    location: '',
    weather: '',
    forecasts: []
  },
}

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        currCity: {
          ...state.currCity,
          location: action.location
        },
      }
    case 'SET_WEATHER':
      return {
        ...state,
        currCity: {
          ...state.currCity,
          weather: action.weather
        },
      }
    case 'SET_FORECASTS':
      return {
        ...state,
        currCity: {
          ...state.currCity,
          forecasts: action.forecasts
        },
      }
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: [...action.favorites]
      }
    case 'SET_DARK_MODE':
      return {
        ...state,
        isDarkMode: action.bool
      }
    default:
      return state
  }
}