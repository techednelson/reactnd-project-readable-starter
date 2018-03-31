import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

export const fetchPosts = () => {
    const request = axios.get('http://localhost:3001/posts', {
        headers: { 'Authorization': 'udacity' }
        }
    );

    return {
        type: FETCH_POSTS,
        payload: request
    };
};
