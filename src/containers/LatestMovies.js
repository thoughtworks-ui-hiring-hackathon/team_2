import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

class LatestMovies extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CardList
            list = {this.props.latestMovies}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        latestMovies: state.latestMovies.movies
    };
}

export default connect(mapStateToProps)(LatestMovies);
