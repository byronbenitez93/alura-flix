import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NewVideo = ({ setVideos }) => {
  const [video, setVideo] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });
  const navigate = useNavigate();
  const modalRef = useRef(null); // Ref para el contenedor del modal

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        navigate('/'); // Volver a la página de inicio al hacer clic fuera del formulario
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...video, id: Date.now() }),
    })
      .then(response => response.json())
      .then(newVideo => {
        setVideos(prevVideos => [...prevVideos, newVideo]);
        navigate('/'); // Redirigir a la página principal
      })
      .catch(error => console.error('Error saving video:', error));
  };

  const handleClear = () => {
    setVideo({
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
  };

  return (
    <ModalBackground>
      <ModalContainer ref={modalRef}> {/* Usar la ref aquí */}
        <Form onSubmit={handleSubmit}>
          <FormTitle>Agregar Nuevo Video</FormTitle>
          <Label>
            Título
            <Input type="text" name="title" value={video.title} onChange={handleChange} required />
          </Label>
          <Label>
            Categoría
            <Input type="text" name="category" value={video.category} onChange={handleChange} required />
          </Label>
          <Label>
            URL de Imagen
            <Input type="url" name="image" value={video.image} onChange={handleChange} required />
          </Label>
          <Label>
            URL de Video
            <Input type="url" name="video" value={video.video} onChange={handleChange} required />
          </Label>
          <Label>
            Descripción
            <TextArea name="description" value={video.description} onChange={handleChange} required />
          </Label>
          <ButtonContainer>
            <Button type="submit">Guardar</Button>
            <Button type="button" onClick={handleClear}>Limpiar</Button>
          </ButtonContainer>
        </Form>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* opacidad */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: rgb(205,207,224);
  background: linear-gradient(90deg, rgba(205,207,224,1) 0%, rgba(23,90,221,1) 35%, #334892 100%);
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1.3px solid #d42e2e;
  box-shadow: 0 4px 16px rgba(142, 16, 153, 0.973);
  border-radius: 4px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0c2e52;
  color: #f1ebeb;

  &:hover {
    background: rgb(128, 230, 255);
    border: 2px solid #002a53;
    box-shadow: inset 0px 0px 12px 4px #000000;
    border-radius: 10px;
    color: black;
    
  }
`;

export default NewVideo;
