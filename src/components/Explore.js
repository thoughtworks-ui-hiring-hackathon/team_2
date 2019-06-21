import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchAsync, queryUpdate } from '../actions/index';
import CardList from './CardList';

class Explore extends Component {

    searchHandler = (e) => {
        queryUpdate(e.target.value)
        this.props.getSearchResult(e.target.value);
    }

    render() {
        return (
            <div className="explore">
                <div className="controls">
                    <div className="search">
                        <input type="text" value={this.props.query} onChange={this.searchHandler} />
                    </div>
                    <div className="filter">
                    </div>
                </div>
                <div className="results">
                    {
                        this.props.movies && <CardList
                            list={this.props.movies}
                        />
                    }
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        query: state.query,
        movies: state.searchResult.result
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSearchResult: (query) => dispatch(getSearchAsync(query))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
