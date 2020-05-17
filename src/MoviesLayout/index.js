import React from "react";
import Card from "../MovieCard";
import './style.css';
import {BrowserRouter as Router, Link} from "react-router-dom";


class MoviesLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            moviesList: [],
        }

        }


    async getMoviesData(page) {

        fetch(this.props.match.params.query === undefined ? 'https://api.themoviedb.org/3/discover/movie?api_key=18b9577e562289ee08b62627929f721b&page=' + page : `https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=18b9577e562289ee08b62627929f721b`,
        )
            .then(async (response) => {
                let data = await response.json();
                console.log(data["results"]);
                this.setState({
                    moviesList: data["results"]
                })
            });

    }

    componentDidMount() {
        this.getMoviesData(this.state.page)
    }

    getNext() {
        this.setState({});
    }

    render() {
        if (this.state.moviesList.length === 0) {
            return <div className={"main"}><p className={"loading"}>Loading</p></div>;
            return <div className={"main-loading"}><p className={"loading"}>Loading</p></div>;
        } else {
            return (
                <div key={JSON.stringify(this.state.moviesList)}  className={"main"}>
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
                    <footer>
                        {this.state.page > 1 && <Link to={`/${this.state.page - 1}`} onClick={async () => {
                            this.setState({
                                page: this.state.page - 1
                            });
                            await this.getMoviesData(this.state.page - 1);
                        }}>
                            <button className={'previous'}>
                                Previous
                            </button>
                        </Link>}
                        <Link to={`/${this.state.page + 1}`} onClick={async () => {
                            this.setState({
                                page: this.state.page + 1
                            });
                            await this.getMoviesData(this.state.page + 1);
                        }}>
                            <button className={'next'}>
                                Next
                            </button>
                        </Link>
                    </footer>
                </div>
            )
        }

    }
}

export default MoviesLayout;
