import express from 'express';

import { getPosts, createPost } from '../controllers/post.js'

const router = express.Router();

//http://localhost:5000/postsa

router.get('/', getPosts);
router.post('/', createPost);

export default router;