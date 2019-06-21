import React, {PureComponent} from 'react';
import Card from './Card';

class CardList extends PureComponent {

    render(){
        const {list} = this.props;
        console.log(list);
        return (
            <div className="card_list">
                {list && list.map((movie) =>
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
