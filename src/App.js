import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import WeatherScreen from './containers/WeatherScreen/WeatherScreen';
import FavoriteScreen from './containers/FavoriteScreen/FavoriteScreen';
import './App.css';

const App = () => {
  return (
    <div className={'app-main'}>
      <Navbar />
      <main>
        <Switch>
          <Route path={'/'} exact component={HomeScreen}/>
          <Route path={'/weather'} component={WeatherScreen}/>
          <Route path={'/favorite'} component={FavoriteScreen}/>
        </Switch>
      </main>
      <div className={'author'}><p>Ido Adar</p></div>
    </div>
  );
}

export default App;