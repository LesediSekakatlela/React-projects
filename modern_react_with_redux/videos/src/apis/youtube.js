import axios from 'axios';

const KEY = 'AIzaSyBGmJFPGqDvAnh6Nc7cgwqE7jfZkFUuU0Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});