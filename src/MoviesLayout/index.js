import React from "react";
import Card from "../MovieCard";
import './style.css';
import {BrowserRouter as Router, Link} from "react-router-dom";


class MoviesLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: this.props.match.params.query === undefined ? 'https://api.themoviedb.org/3/discover/movie?api_key=18b9577e562289ee08b62627929f721b' : `https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=18b9577e562289ee08b62627929f721b`,
            moviesList: []
        }
    }

    async getMoviesData() {
        console.log("started");
        fetch(this.state.link)
            .then(async (response) => {
                let data = await response.json();
                console.log(data["results"]);
                this.setState({
                    moviesList: data["results"]
                })
            });
        console.log(this.state.moviesList);
    }

    componentDidMount() {
        this.getMoviesData()
    }

    render() {
        if (this.state.moviesList.length === 0) {
            return <div className={"main"}><p className={"loading"}>Loading</p></div>;
        } else {
            return (
                <div className={"main"}>
                    <Link to={'/search'}>
                        <button className={"search-button"}>Search</button>
                    </Link>
                    <div className={"movies-layout"}>
                        {
                            this.state.moviesList.map((element) => {
                                return <Card
                                    cardDetails={element}
                                />
                            })
                        }
                    </div>
                </div>
            )
        }

    }
}

export default MoviesLayout;