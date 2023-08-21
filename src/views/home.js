import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import "./home.css";
import CustomCard from "../components/CustomCard";
import { useDataContext } from "../context/DataContext";

const Home = (props) => {

  const [searchText, setSearchText] = useState("");

  const { handleSearch } = useDataContext();

  useEffect(() => {
    handleSearch().then((handleSearch) => {
      setSearchText(handleSearch);
    });
  }, []);


  const { fetchData } = useDataContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData); // Set the fetched data to the state
    });
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Deezer</title>
        <meta property="og:title" content="Deezer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">Search for music</h1>
              </header>
              <div className="home-container1">
                <input
                  type="text"
                  placeholder="Search Tracks"
                  className="home-textinput input"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <div className="home-get-started button">
                  <span className="home-text" onClick={handleSearch}>
                    <span>Search</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-buttons"></div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2 avatar"
                />
              </div>
              <label className="home-caption">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/SectionImages/mic-removebg-preview-600h.png"
              className="home-image4"
            />
          </div>
          <div className="home-image5"></div>
        </div>
      </section>
      <section
        style={{
          background: "white",
          height: "100vh",
          width: "100vw",
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data?.map((dta) => (
          <CustomCard key={dta.id} title={dta.title} source={dta.image} />
        ))}
      </section>
    </div>
  );
};

export default Home;
