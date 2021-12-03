import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../controllers/post.js'

const router = express.Router();

//http://localhost:5000/postsa

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost );
router.delete('/:id', deletePost);

export default router;
