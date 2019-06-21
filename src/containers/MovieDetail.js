import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { getSimilarMoviesAsync, getMovieDetailsAsync, getMostWatchedMoviesAsync } from '../actions';
import MovieInfo from '../components/MovieInfo';

class MovieDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        const arr = window.location.href.split('/');
        const id = arr[arr.length - 1];
        props.getSimilarMovies(id);
        props.getMovieDetails(id);
    }
    render() {
        const similarMovies = this.props.similarMovies.splice(0, 5);
        return (
            <React.Fragment>
                <MovieInfo data={this.props.details} />
                <div className="most-watched">
                    <h2> Similar Movies </h2>
                    <CardList
                        list={similarMovies}
                    />
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        similarMovies: state.movies.similarMovies,
        details: state.movieDetails.details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSimilarMovies: id => dispatch(getSimilarMoviesAsync(id)),
        getMovieDetails: id => dispatch(getMovieDetailsAsync(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);