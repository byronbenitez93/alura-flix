import React from 'react';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';

const Home = ({ videos, setVideos }) => {
  const handleDelete = id => {
    fetch(`http://localhost:3001/videos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setVideos(videos.filter(video => video.id !== id));
      })
      .catch(error => console.error('Error deleting video:', error));
  };

  return (
    <Container>
      {videos.length === 0 ? (
        <p>No videos available</p>
      ) : (
        <>
          <Section>
            <SectionTitle category="Front End">Front End</SectionTitle>
            <VideoList>
              {videos.filter(video => video.category === 'Front End').map(video => (
                <VideoCard key={video.id} video={video} onDelete={handleDelete} />
              ))}
            </VideoList>
          </Section>
          <Section>
            <SectionTitle category="Back End">Back End</SectionTitle>
            <VideoList>
              {videos.filter(video => video.category === 'Back End').map(video => (
                <VideoCard key={video.id} video={video} onDelete={handleDelete} />
              ))}
            </VideoList>
          </Section>
          <Section>
            <SectionTitle category="Innovación y Gestión">Innovación y Gestión</SectionTitle>
            <VideoList>
              {videos.filter(video => video.category === 'Innovación y Gestión').map(video => (
                <VideoCard key={video.id} video={video} onDelete={handleDelete} />
              ))}
            </VideoList>
          </Section>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  display: inline-block;
  background: ${({ category }) => {
    switch (category) {
      case 'Front End':
        return '#c90404';
      case 'Back End':
        return '#FFA500';
      case 'Innovación y Gestión':
        return '#32CD32';
      default:
        return '#6BD1FF';
    }
  }};
  padding: 10px;
  border-radius: 5px;
  color: #fff;
`;

const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default Home;
