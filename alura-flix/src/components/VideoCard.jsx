import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

const VideoCard = ({ video, onDelete }) => {
  return (
    <Card>
      <Link to={video.video} target="_blank">
        <Image src={video.image} alt={video.title} />
      </Link>
      <Title>{video.title}</Title>
      <Actions>
        <IconButton onClick={() => onDelete(video.id)}>
          <FaTrash />
        </IconButton>
        <Link to={`/edit/${video.id}`}>
          <IconButton>
            <FaEdit />
          </IconButton>
        </Link>
      </Actions>
    </Card>
  );
};

const Card = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(19, 4, 233, 0.7);
  overflow: hidden;
  margin: 12px;
`;



const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.7);
`;

const Title = styled.h3`
  margin: 10px;
  padding: 10px;
  background-color: rgba(6, 45, 83, 0.7);
  color: #fff;
  border-radius: 5px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: auto;
`;

const IconButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 18px;
  


  &:hover {
    color: #333;
  }
`;

export default VideoCard;
