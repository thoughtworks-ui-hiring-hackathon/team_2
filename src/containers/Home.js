import React from 'react';
import { connect } from 'react-redux';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return null;
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
