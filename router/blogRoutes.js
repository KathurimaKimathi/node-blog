const express = require('express');
const blogController  = require('../controllers/blogControllers');

const router = express.Router();

// Index page
router.get('/', blogController.blog_index);
  
// Create a new blog post
router.post('/', blogController.blog_create_post);

// Get blog form page
router.get('/create', blogController.blog_create_get);

// Get blog by id
router.get('/:id', blogController.blog_details);

// delete blog
router.delete('/:id', blogController.blog_delete);
  
module.exports = router;