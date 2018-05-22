const appKey = 'kid_ByfHP5Y0f';
const appSecret = '40fb7490abe94c96a980f7806b029942';
const hostUrl = 'https://baas.kinvey.com';

const reqHandler = {
    login: (payload) => {
        return fetch(`${hostUrl}/user/${appKey}/login`, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json();
        });
    },
    register: (payload) => {
        return fetch(`${hostUrl}/user/${appKey}`, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: payload.username, password: payload.password })
        }).then(res => {
            return res.json();
        });
    },
    pullPosts: () => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_km.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('kinveyToken')
            },
        }).then(data => {
            return data.json();
        });
    },
    pullMyPosts: () => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_km.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('kinveyToken')
            },
        }).then(data => {
            return data.json();
        });
    },
    createPost: (payload) => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts`, {
            method: 'POST',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('kinveyToken'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author: payload.author, title: payload.title, description: payload.description, url: payload.url, imageUrl: payload.imageUrl })
        }).then(data => {
            return data.json();
        });
    },
    getSinglePost: (id) => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('kinveyToken')
            }
        }).then(data => {
            return data.json();
        });
    },
    getComments: (postId) => {
        return fetch(`${hostUrl}/appdata/${appKey}/comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('kinveyToken')
            }
        }).then(data => {
            return data.json();
        });
    }
};

export default reqHandler;