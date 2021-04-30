import axios from "axios";


const instance = axios.create({
    // the AIP CLOUD FUNCTION URL 
    baseURL: 'http://localhost:5001/clone-ec084/us-central1/api'
});

export default instance;
