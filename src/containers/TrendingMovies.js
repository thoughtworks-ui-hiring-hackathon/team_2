import React from 'react';
import { connect } from 'react-redux';

class TrendingMovies extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        trendingMovies: state.trendingMovies.movies
    };
}

export default connect(mapStateToProps)(TrendingMovies);
