import React from 'react';
import { connect } from 'react-redux';

class MostWatched extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        mostWatched: state.mostWatched.movies
    };
}

export default connect(mapStateToProps)(MostWatched);