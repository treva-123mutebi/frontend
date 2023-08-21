import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './artist.css'

const Artist = (props) => {
  return (
    <div className="artist-container">
      <Helmet>
        <title>Artist - Planical modern template</title>
        <meta property="og:title" content="Artist - Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="artist-container1">
        <div className="artist-container2"></div>
        <div className="artist-container3">
          <h1 className="artist-text">Artist</h1>
        </div>
        <div className="artist-container4">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="artist-image"
          />
          <div className="artist-container5">
            <h1 className="artist-text1">Top 5 Songs</h1>
            <ul className="list">
              <li className="list-item">
                <span className="artist-text2">Text</span>
              </li>
              <li className="list-item">
                <span className="artist-text3">Text</span>
              </li>
              <li className="list-item">
                <span className="artist-text4">Text</span>
              </li>
            </ul>
          </div>
          <div className="artist-container6">
            <h1 className="artist-text5">Albums</h1>
            <ul className="list">
              <li className="list-item">
                <span className="artist-text6">Text</span>
              </li>
              <li className="list-item">
                <span className="artist-text7">Text</span>
              </li>
              <li className="list-item">
                <span className="artist-text8">Text</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="artist-section"></section>
    </div>
  )
}

export default Artist
