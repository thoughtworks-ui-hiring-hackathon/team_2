import React from 'react';
import { connect } from 'react-redux';

class LatestMovies extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        latestMovies: state.latestMovies
    };
}

export default connect(mapStateToProps)(LatestMovies);
