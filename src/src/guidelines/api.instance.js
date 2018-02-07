import axios from 'axios';
import config from './base.config';

// Set config defaults when creating the api instance
var API = axios.create({
    baseURL: config.apiurl
});

export default API;