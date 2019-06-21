import React from 'react';
import { connect } from 'react-redux';
import { getLatestMoviesAsync, getTrendingMoviesAsync, getMostWatchedMoviesAsync } from '../actions/index';
import LatestMovies from './LatestMovies';
import TrendingMovies from './TrendingMovies';
import MostWatched from './MostWatched';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        props.getLatestMovies();
        props.getTrendingMovies();
        props.getMostWatchedMovies();
    }
    render() {
        return (
            <div className="app">
                <div className="latest">
                    <h2> Latest   </h2>
                    <LatestMovies/>
                </div>
                <div className="trending">
                    <h2> Trending  </h2>
                    <TrendingMovies />
                </div>
                <div className="most-watched">
                    <h2> Most Watched  </h2>
                    <MostWatched />
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        getLatestMovies: () => dispatch(getLatestMoviesAsync()),
        getTrendingMovies: () => dispatch(getTrendingMoviesAsync()),
        getMostWatchedMovies: () => dispatch(getMostWatchedMoviesAsync())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
