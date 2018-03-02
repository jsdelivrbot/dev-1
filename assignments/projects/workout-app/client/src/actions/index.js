import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';


const ROOT_URL = 'http://localhost:3001/api';
const API_KEY = '?key=bboy69';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/workouts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPosts(values, callback) {
    const request = axios.post(`${ROOT_URL}/workouts${API_KEY}`, values)
        .then(() => callback());
    
    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export function fetchPost(_id) {
    const request = axios.get(`${ROOT_URL}/workouts/${_id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(_id, callback) {
    const request = axios.delete(`${ROOT_URL}/workouts/${_id}${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: _id
    }
}