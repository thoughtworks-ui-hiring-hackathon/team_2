import React from 'react';

const renderStarRating = (rating) => {
    let html = [];
    rating = rating/2;
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

const MovieInfo = (props) => {
    const data = props.data || {};
    const director = data.credits && data.credits.crew.find(d => d.job === 'Director') || {};
    return (
        <div className="movie-info">
            <div className="banner" style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${data.poster_path}`})` }}>
                {/* <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} /> */}
            </div>
            <div className="details">
                <div className="overview">
                    <h2>{data.original_title}</h2>
                    <div>{data.overview}</div>
                </div>
                <div className="overview info">
                    <div>
                        <h3>Genre</h3>
                        <div>{data.genres && data.genres.map(c => <span key={c.id}>  {c.name}, </span>)}</div>
                    </div>
                    <div>
                        <h3>Cast</h3>
                        <div>{data.credits && data.credits.cast.map(c => <span>{c.character}, </span>)}</div>
                    </div>
                    <div>
                        <h3>Director</h3>
                        <div>{director.name}</div>
                    </div>
                    <div>
                        <h3>Movie Rating</h3>
                        <div>{renderStarRating(data.vote_average)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
