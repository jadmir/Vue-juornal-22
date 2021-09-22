import axios from "axios";


const juornalApi = axios.create ({
    baseURL: 'https://vue-demos-6e981-default-rtdb.firebaseio.com'
})

export default juornalApi