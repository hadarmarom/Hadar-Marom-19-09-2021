import weatherService from '../../services/weatherService'

export function loadLocation(filterBy = 'tel aviv') {
  return async dispatch => {
    const favorites = await weatherService.loadFavorites()
    const location = await weatherService.queryLocation(filterBy)
    if (!location) return filterBy
    const weather = await weatherService.queryWeather(location.Key)
    const forecasts = await weatherService.query5Days(location.Key)
    var action = { type: 'SET_FAVORITES', favorites }
    dispatch(action)
    var action = { type: 'SET_LOCATION', location }
    dispatch(action)
    action = { type: 'SET_WEATHER', weather }
    dispatch(action)
    action = { type: 'SET_FORECASTS', forecasts }
    dispatch(action)
  }
}
export function addToFavorites(city) {
  return async dispatch => {
    const favorites = await weatherService.addToFavorites(city)
    var action = { type: 'SET_FAVORITES', favorites }
    dispatch(action)
  }
}
export function removeFromFavorites(city) {
  return async dispatch => {
    const favorites = await weatherService.removeFromFavorites(city)
    var action = { type: 'SET_FAVORITES', favorites }
    dispatch(action)
  }
}
export function changeDarkMode(bool) {
  return async dispatch => {
    var action = { type: 'SET_DARK_MODE', bool }
    dispatch(action)
  }
}