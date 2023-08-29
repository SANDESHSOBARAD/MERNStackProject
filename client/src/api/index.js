import axios from 'axios';

const url = 'http://localhost:8001/posts';

export const fetchPosts = () => axios.get(url);
