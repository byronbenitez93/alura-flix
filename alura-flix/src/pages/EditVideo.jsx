import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditModal from '../components/EditModal';

const EditVideo = ({ videos, updateVideo }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const videoToEdit = videos.find(v => v.id === parseInt(id));
    if (videoToEdit) {
      setVideo(videoToEdit);
    }
  }, [id, videos]);

  const handleSave = editedVideo => {
    updateVideo(editedVideo);
    setIsOpen(false);
    navigate('/');
  };

  if (!video) return null;

  return (
    <div>
      <EditModal isOpen={isOpen} onClose={() => setIsOpen(false)} video={video} onSave={handleSave} />
    </div>
  );
};

export default EditVideo;



