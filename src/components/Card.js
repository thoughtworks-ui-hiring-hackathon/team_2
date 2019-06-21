import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Card extends PureComponent {

    renderStarRating = (rating) => {
        let html = [];
        let fullStars = Math.floor(rating);
        for(let i=0; i<fullStars; i++){
            html.push(<i className="fa fa-star" aria-hidden="true" key=`star-${i}` ></i>);
        }
        if(rating-fullStars !== 0){
            html.push(<i className="fa fa-star-half-o" aria-hidden="true" key= `half-star-${i}`></i>);
            fullStars++;
        }
        for(let j=fullStars; j < 5 ; j++){
            html.push(<i className="fa fa-star-o" aria-hidden="true" key= `empty-star-${i}` ></i>);
        }
        return html;
    }

    render(){
        const {movie} = this.props;
        return (
            <div className="card">
                <div className="card_poster">
                    <img src={movie.poster_path}/>
                </div>
                <div className="card_details">
                    <div>
                        <h2> {movie.original_title}</h2>
                    </div>
                    <div>
                        <p className="genres">
                            {
                                movie.genres.join(", ");
                            }
                        </p>
                    </div>
                    <div className="wrapper_details_footer">
                        <div className="star_rating">
                            {this.renderStarRating(movie.vote_average).join()}
                        </div>
                        <div className="more-link">
                            <Link "/" >Show More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
