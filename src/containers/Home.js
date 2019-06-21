import React from 'react';
import { connect } from 'react-redux';
import { getLatestMoviesAsync } from '../actions/index';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        props.getLatestMovies();
    }
    render() {
        return null;
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        getLatestMovies: () => dispatch(getLatestMoviesAsync())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
