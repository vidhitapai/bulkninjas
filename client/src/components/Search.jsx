import React, {useState} from 'react'
import axios from "axios";
import { Navigate } from "react-router";
import Productcard from './Productcard';

function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const searchProducts = async (event) => {
        try {
             const {data} = await axios.post("http://localhost:8001/api/buyer/search", {query});
        if (data.data) {
           setResults([data.data]);
        }
        }
       catch (err) {
           throw err;
       }
    }
    return (
      <>{results === [] ? (
          <div className="search">
            <div className="container" id="dashboardContainer">
              <form className="navbar-form navbar-left">
                <input
                  type="text"
                  className="form-control col-lg-8"
                  placeholder="What are you looking for?"
                  id="searchBar"
                  onChange={(event) => setQuery(event.target.value)}
                ></input>
                <button
                  type="button"
                  className="btn btn-dark btn-lg"
                  id="searchbutton"
                  onClick={searchProducts}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        ) : results.map((product) => {
            return <Productcard mrp={product.mrp} totalQuantity={product.totalQuantity} discountedPrice={product.discountedPrice} name={product.name}/>
        })}
 
      </>
    );
}

export default Search
