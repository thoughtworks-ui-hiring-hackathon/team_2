import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Card from './Card';

class CardList extends PureComponent {

    render(){
        const {list} = this.props;
        return (
            <div className="card_list">
                {list.map((movie) =>
                        <Card
                        key={movie.id}
                        movie = {movie}
                        />
                    )
                }
            </div>

        );
    }
}

export default CardList;
