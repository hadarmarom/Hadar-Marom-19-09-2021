import { Link } from 'react-router-dom'
import './AppHeader.scss'
import UseSwitchesCustom from '../DarkModeSwitch'
import { useSelector } from 'react-redux'


export function AppHeader() {
    const isDarkMode = useSelector(state => state.weatherReducer.isDarkMode)
    return (
        <div className="app-header" style={isDarkMode ? { color: 'white' } : { color: 'black' }}>
            <div>
                <UseSwitchesCustom defaultChecked />
            </div>
            <span className="herolo-span">Herolo Weather Task</span>
            <nav className="app-header-con">
                <Link to={`/`}>HOME </Link>
                 <span>|</span>
                <Link to={`/favorites`}> FAVORITES</Link>
            </nav>
        </div>
    )
}
