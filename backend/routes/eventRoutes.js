const express = require('express');
const { getBlogs, createBlog, deleteBlog, updateBlog, upload, getGallery, uploadImages, deleteImage } = require('../controllers/eventController');
const router = express.Router();

router.get('/blogs', getBlogs);
router.post('/blogs', upload.array('images', 5), createBlog);
router.delete('/blogs/:id', deleteBlog);
router.put('/blogs/:id', upload.array('images', 5), updateBlog);



router.get('/gallery', getGallery);
router.post('/gallery', upload.array('images', 5), uploadImages);
router.delete('/gallery/:id', deleteImage);

module.exports = router;
