import axios from 'axios';

const client = axios.create({
    baseURL:
        'https://outside-in-dev-api.herokuapp.com/SROEGeLRYpzgw5X2XqxO6lGe5eGIoEm6',
});

const api = {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
};

export default api;
