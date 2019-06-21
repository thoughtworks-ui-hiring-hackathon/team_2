import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Card extends PureComponent {

    renderStarRating = (rating) => {
        let html = [];
        let fullStars = Math.floor(rating);
        for(let i=0; i<fullStars; i++){
            html.push(<i className="fa fa-star" aria-hidden="true" key={`star-o-${i}`}></i>);
        }
        if(rating-fullStars !== 0){
            html.push(<i className="fa fa-star-half-o" aria-hidden="true" key={`star-half`}></i>);
            fullStars++;
        }
        for(let j=fullStars; j < 5 ; j++){
            html.push(<i className="fa fa-star-o" aria-hidden="true"  key={`star-null-${j}`}></i>);
        }

        return html;
    }

    render(){
        const {movie,genreList} = this.props;
        console.log(genreList);
        return (
            <div className="card">
                <div className="card_poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                </div>
                <div className="card_details">
                    <div>
                        <h2> {movie.original_title}</h2>
                    </div>
                    <div>
                        <p className="genres">
                            {
                                movie.genre_ids.map((id) =>
                                    <span>{`${genreList[id]}, `}</span>
                            )
                            }
                        </p>
                    </div>
                    <div className="wrapper_details_footer">
                        <div className="star_rating">
                            {
                                this.renderStarRating(movie.vote_average)
                            }
                        </div>
                        <div className="more-link">
                            <Link to='/' >Show More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        genreList: state.genre.genre
    };
}

export default connect(mapStateToProps)(Card);
