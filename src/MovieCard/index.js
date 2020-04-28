import React from "react";
import './style.css'
import {BrowserRouter as Router, Link,} from "react-router-dom";

class Card extends React.Component {
    card= this.props.cardDetails;

    render() {
        let path = "/details/" + this.card["id"];
        return (
            <Link to={path}>
                <div className={"movie-card"}>
                    <img src={"https://image.tmdb.org/t/p/original" + this.card["poster_path"]} alt="poster image"/>
                    <div className={"details"}>
                        <p className={"title"}>{this.card["original_title"]}</p>
                        <footer>
                            <div className={"bottom"}><p>{this.card["overview"].substring(0, 100)}</p>
                                <div className={"content-rating"}>
                                    <p>{this.card["vote_average"]}</p>
                                </div>
                            </div>
                        </footer>
                    </div>

                </div>
            </Link>
        );
    }
}

export default Card;