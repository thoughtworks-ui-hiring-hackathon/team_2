import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Explore from './components/Explore';
import Header from './components/Header';
import MovieDetail from './containers/MovieDetail';

const App = () => {
	return (
		<Router>
			<Header />
			<Route path="/" exact component={Home} />
			<Route path="/explore" component={Explore} />
			<Route path="/movie-detail/:id" component={MovieDetail} />
		</Router>
	);
}

export default App;
