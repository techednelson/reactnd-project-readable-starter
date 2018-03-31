export const FETCH_POSTS = 'fetch_posts';

export const fetchPosts = () => {
    const request = fetch('http://localhost:3001/posts',
    {
        headers: { 'Authorization': 'whatever-you-want' }
    }
    )
    .then(response => response.json())
    .then(data => {
        return data;
    });

    return {
        type: FETCH_POSTS,
        payload: request
    };
};
