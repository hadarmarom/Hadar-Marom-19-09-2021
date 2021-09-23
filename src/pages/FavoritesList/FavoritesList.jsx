import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadLocation } from '../../store/actions/weatherActions'
import './FavoritesList.scss'

export function FavoritesList() {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.weatherReducer.favorites)
    const isDarkMode = useSelector(state => state.weatherReducer.isDarkMode)

    return (
        <ul className="favorites-list" style={isDarkMode ? { color: 'white' } : { color: 'black' }}>
            {favorites.map((city) => <li key={city.location.Key} className={isDarkMode ? "dark" : "bright"}><Link onClick={() => dispatch(loadLocation(city.location.LocalizedName))} to={`/`}>
                <h3>{city.location.LocalizedName}</h3>
                <h3>{city.weather.WeatherText}</h3>
                <h3>{city.forecasts[0].temperature.Maximum.Value} °F</h3>
            </Link>
            </li>
            )}
            {!favorites.length && <span>You Have No Favorite Cities Yet</span>}
        </ul>
    )
}
