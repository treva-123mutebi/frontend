import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './search-result.css'

const SearchResult = (props) => {
  return (
    <div className="search-reseult-container">
      <Helmet>
        <title>Search-Reseult - Planical modern template</title>
        <meta
          property="og:title"
          content="Search-Reseult - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <section className="search-reseult-section">
        <span className="search-reseult-text">Search Results</span>
        <div className="search-reseult-container1">
          <div className="search-reseult-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="search-reseult-image"
            />
          </div>
          <ul className="list">
            <li className="search-reseult-li list-item">
              <span>Artist Name</span>
            </li>
            <li className="list-item">
              <span className="search-reseult-text2">Song</span>
            </li>
            <li className="list-item">
              <span className="search-reseult-text3">Duration</span>
            </li>
          </ul>
        </div>
      </section>
      <div>
        
      </div>
    </div>
  )
}

export default SearchResult
