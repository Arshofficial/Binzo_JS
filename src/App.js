import React from 'react';
import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav/>
      <Banner/>
      <Row 
      title = "TRENDING NOW" 
      fetchURL={request.fetchTrending} 
      isLargeRow = {true}
      />
      <Row title = "TOP RATED" fetchURL = {request.fetchTopRated} />
      <Row title = "Action Movies" fetchURL = {request.fetchActionMovies} />
      <Row title = "Commedy Movies" fetchURL = {request.fetchComedyMovies} />
      <Row title = "Romance Movies" fetchURL = {request.fetchRomanceMovies} />
      <Row title = "Documentaries" fetchURL = {request.fetchDocumentaries} />


    </div>
  );
}

export default App;
