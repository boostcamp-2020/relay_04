import axios from 'axios'

const URL = 'http://localhost:4000'

export const signInAPI = async ({id, pw}) => {
    try{
        const response = await axios.post(`${URL}/api/user/signin`, {
            id,
            pw
        })
        return response;
    } catch(error) {
        return {error}
    }
}

export const signUpAPI = async ({id, pw}) => {
    try{
        const response = await axios.post(`${URL}/api/user/signup`, {
            id,
            pw
        })

        return response;
    } catch(error) {
        return {error}
    }
}

export const writePostAPI = async({id, title, content}) => {
    try{
        const response = await axios.post(`${URL}/api/post/write`, {
            userid: id,
            title,
            content
        });

        return response;
    } catch( error ) {
        return { error }
    }
}

export const loadPostsAPI = async() => {
    try {
        const response = await axios.get(`${URL}/api/posts`);
        return response;
    } catch(error) {
        return {error}
    }
}

export const loadPostAPI = async(id) => {
    try{
        const response = await axios.get(`${URL}/api/post/${id}`);

        return response;
    }catch(error){
        return {error}
    }
}

export const changeBadPost = async (id) => {
    try {
        const response = await axios.post(`${URL}/api/post/update/${id}`,{
            id
        });

        return response;
    } catch(error) {
        return {error}
    }
}

export const deletePost = async (id) => {
    try{
        const response = await axios.delete(`${URL}/api/post/${id}`, {
            id
        })

        return response;
    } catch(error) {
        return {error}
    }
}