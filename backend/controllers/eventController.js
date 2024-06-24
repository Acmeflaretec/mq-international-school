
const Blog = require('../models/blogModel');
const Gallery = require('../models/galleryModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

const getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json(blogs);
};

const createBlog = async (req, res) => {
    console.log("sa,");
    const { title, description, date } = req.body;

    const images = req.files.map(file => file.filename);

    const blog = new Blog({
        title,
        description,
        images,
        date,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
};

const deleteBlog = async (req, res) => {
    
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBlog = async (req, res) => {
    const { title, description, date } = req.body;
    const images = req.files.map(file => file.filename);

    const blog = await Blog.findById(req.params.id);

    if (blog) {
        blog.title = title || blog.title;
        blog.description = description || blog.description;
        if (images.length > 0) {
            blog.images = images;
        }
        blog.date = date || blog.date;

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
};




const getGallery = async (req, res) => {
    const images = await Gallery.find({}).sort({ createdAt: -1 });
    res.json(images);
  };
  
  const uploadImages = async (req, res) => {
    const imageUrls = req.files.map(file => file.filename);
  
    const images = imageUrls.map(imageUrl => ({
      imageUrl,
    }));
  
    await Gallery.insertMany(images);
    res.status(201).json({ message: 'Images uploaded successfully' });
  };
  
  const deleteImage = async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Image removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

module.exports = { getBlogs, createBlog, deleteBlog, updateBlog, upload ,getGallery, uploadImages, deleteImage };
