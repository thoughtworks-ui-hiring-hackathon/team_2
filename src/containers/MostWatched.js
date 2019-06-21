import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

class MostWatched extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CardList
            list = {this.props.mostWatched}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        mostWatched: state.mostWatched.movies
    };
}

export default connect(mapStateToProps)(MostWatched);
