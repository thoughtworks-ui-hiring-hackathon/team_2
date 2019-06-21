import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';


class TrendingMovies extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CardList
            list = {this.props.trendingMovies.splice(0, 4)}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        trendingMovies: state.trendingMovies.movies
    };
}

export default connect(mapStateToProps)(TrendingMovies);
