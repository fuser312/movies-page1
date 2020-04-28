import React, {useState} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default function SearchPage(props) {
    let [path, setPath] = useState('/search');
    return (
        <div className={'main'}>
            <input type="text" id="input-field" className={"search-input-field"} onChange={(event)=>setPath(`/search/${event.target.value}`)}/>
            <Link to={path}>
                <button className={"search-button"} >Search</button>
            </Link>
        </div>
    );
}