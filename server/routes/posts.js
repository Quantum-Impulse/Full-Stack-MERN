import express from 'express';

import { getPosts, createPosts } from '../controllers/post.js'

const router = express.Router();

//http://localhost:5000/postsa

router.get('/', getPosts);
router.post('/', createPosts);

export default router;
