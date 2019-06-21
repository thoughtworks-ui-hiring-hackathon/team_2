import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

class LatestMovies extends React.PureComponent {

    render() {
        return (
            <CardList
            list = {this.props.latestMovies.splice(0, 4)}
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
