import baseAxios from './baseAxios';

async function apiGetPosts() {
    const res = await baseAxios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    });
  
    return res.data || null;
  }

async function apiGetAlbums(userId) {
  const res = await baseAxios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/users/${userId}/albums`,
  });

  return res.data || null;
}

async function apiGetPhotos(albumId) {
  const res = await baseAxios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
  });

  return res.data || null;
}

async function apiCreatePost(payload) {
  await baseAxios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: payload,
  });
}

async function apiUpdatePost(id, payload) {
  await baseAxios({
    method: 'PUT',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    data: payload,
  });
}

export {
    apiGetPosts,
    apiGetAlbums,
    apiGetPhotos,
    apiCreatePost,
    apiUpdatePost
};