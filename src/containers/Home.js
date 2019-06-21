import React from 'react';
import { connect } from 'react-redux';
import { getLatestMoviesAsync, getTrendingMoviesAsync, getMostWatchedMoviesAsync } from '../actions/index';
import MostWatched from './MostWatched';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        props.getLatestMovies();
        props.getTrendingMovies();
        props.getMostWatchedMovies();
    }
    render() {
        return <div>
            <MostWatched />
        </div>;
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
