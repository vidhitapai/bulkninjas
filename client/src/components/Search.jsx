import React from 'react'

function Search() {
    return (
        <div className="search">
            <div className="container" id="dashboardContainer"> 
            <form className="navbar-form navbar-left">
            <input type="text" className="form-control col-lg-8" placeholder="What are you looking for?" id="searchBar"></input>
            <button type="button" className="btn btn-dark btn-lg" id="searchbutton">Search</button>
        </form>
            </div>            
        </div>
    )
}

export default Search
