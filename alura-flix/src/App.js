import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import EditVideo from './pages/EditVideo';
import Footer from './components/Footer';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/videos.json')
      .then(response => response.json())
      .then(data => {
        if (data.videos && Array.isArray(data.videos)) {
          setVideos(data.videos);
        } else {
          console.error('Expected an array of videos but got', data.videos);
        }
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const updateVideo = (editedVideo) => {
    setVideos(videos.map(video => (video.id === editedVideo.id ? editedVideo : video)));
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home videos={videos} setVideos={setVideos} />} />
        <Route path="/new" element={<NewVideo setVideos={setVideos} />} />
        <Route path="/edit/:id" element={<EditVideo videos={videos} updateVideo={updateVideo} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

