"use client"; // Ensure client-side rendering

import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardActions, Button, Modal, Box, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
// import './style.css'

const URL = "http://localhost:5000";

interface Image {
  _id: string;
  imageUrl: string;
}

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await axios.get(`${URL}/gallery`);
    setImages(response.data);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach(file => formData.append('images', file));

    await axios.post(`${URL}/gallery`, formData);
    fetchImages();
    setOpen(false);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`${URL}/gallery/${id}`);
    fetchImages();
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Button onClick={() => setOpen(true)} variant="contained" color="success">
        Add Images
      </Button>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {images.map(image => (
          <Grid item xs={12} sm={6} md={4} key={image._id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`${URL}/uploads/${image.imageUrl}`}
                alt="gallery image"
              />
              <CardActions>
                <IconButton color="secondary" onClick={() => handleDelete(image._id)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="add-image-modal-title"
        aria-describedby="add-image-modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="add-image-modal-title">Add Images</h2>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            style={{ display: 'block', margin: '20px 0' }}
          />
          <Button onClick={handleUpload} variant="contained" color="success">
            Upload
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default Gallery;
