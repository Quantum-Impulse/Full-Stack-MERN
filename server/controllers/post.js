import e from "express";
import PostMessage from "../models/postMessage.js";

// postMessage.find() is async action so we use await and async 
export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json( {message: error.message });        
    }
}

export const createPost = (req, res) => {
    res.send('Post Creation');
}