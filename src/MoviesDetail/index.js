import React from "react";
import "./style.css"



class MoviesDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        this.getMovieData()
    }

    async getMovieData() {
        console.log("started")
        fetch('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=18b9577e562289ee08b62627929f721b')
            .then(async (response) => {
                let data = await response.json();
                console.log(data);
                this.setState({
                    movie: data
                })
            });
    }


    render() {
        if (this.state.movie === null) {
            return <div className={"main-page"}><p className={"loading"}>Loading</p></div>;
        } else {
            return (
                <div className={"main-details"}
                     style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path})`}}>
                    <div className={"overlay"}></div>
                    <div className={"details-div"}>
                        <img src={"https://image.tmdb.org/t/p/original" + this.state.movie.poster_path} alt=""
                             className={"details-poster"}/>
                        <div className={"details-text"}>
                            <p className={"details-title"}>{this.state.movie.original_title}</p>
                            <p className={"details-overview"}>{this.state.movie.overview}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MoviesDetails;
