import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EditModal = ({ isOpen, onClose, video, onSave }) => {
    const [editedVideo, setEditedVideo] = useState(video);

    useEffect(() => {
        setEditedVideo(video);
    }, [video]);

    const handleChange = e => {
        const { name, value } = e.target;
        setEditedVideo({
            ...editedVideo,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editedVideo);
    };

    const handleClear = () => {
        setEditedVideo({
            title: '',
            category: '',
            image: '',
            video: '',
            description: '',
        });
    };

    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContainer>
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Editar Video</FormTitle>
                    <Label>
                        Título
                        <Input type="text" name="title" value={editedVideo.title} onChange={handleChange} required />
                    </Label>
                    <Label>
                        Categoría
                        <Input type="text" name="category" value={editedVideo.category} onChange={handleChange} required />
                    </Label>
                    <Label>
                        URL de Imagen
                        <Input type="url" name="image" value={editedVideo.image} onChange={handleChange} required />
                    </Label>
                    <Label>
                        URL de Video
                        <Input type="url" name="video" value={editedVideo.video} onChange={handleChange} required />
                    </Label>
                    <Label>
                        Descripción
                        <TextArea name="description" value={editedVideo.description} onChange={handleChange} required />
                    </Label>
                    <ButtonContainer>
                        <Button type="submit">Guardar</Button>
                        <Button type="button" onClick={handleClear}>Limpiar</Button>
                        <Button type="button" onClick={onClose}>Cerrar</Button>
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: linear-gradient(#cbcfe7,#323338);
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: inset 0 4px 8px rgb(29, 13, 100);
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
  border: 1px solid #ccc;
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
  background-color: #007bff;
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #2271D1;
    box-shadow: inset 0px 0px 12px 4px #2271D1;
    border-radius: 10px;
  }
`;

export default EditModal;

