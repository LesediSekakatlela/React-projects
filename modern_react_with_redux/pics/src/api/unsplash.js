import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID U-AAffvhMusA6Yv3N8MSM4b3EbZIP3QZH_U0HL_zQcI'
    }
});
