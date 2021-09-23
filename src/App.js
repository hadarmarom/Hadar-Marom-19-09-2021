
import './App.scss';
import { HeroloApp } from './pages/HeroloApp'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadLocation } from './store/actions/weatherActions';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { FavoritesList } from './pages/FavoritesList/FavoritesList';

function App() {
  const dispatch = useDispatch()
  const currCity = useSelector(state => state.weatherReducer.currCity)
  const isDarkMode = useSelector(state => state.weatherReducer.isDarkMode)

  useEffect(() => {
    dispatch(loadLocation())
  }, [])

  if (!currCity.location.Key || !currCity.weather.WeatherText || !currCity.forecasts.length) return <div>loadiv</div>

  return (
    <Router>
      <div className="App container" style={isDarkMode ? { backgroundImage: ' linear-gradient(rgb(101, 183, 198), rgb(3 45 60) 80%)' } : { backgroundImage: ' linear-gradient(rgb(246, 254, 255), rgb(0 189 255) 80%)' }}>
        <AppHeader></AppHeader>
        <Switch>
          <Route component={FavoritesList} path='/favorites' />
          <Route component={HeroloApp} path='/' />
        </Switch>
      </div>
    </Router >
  );
}

export default App;

