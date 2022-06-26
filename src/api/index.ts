import axios from 'axios';

export default axios.create({
    baseURL:
        import.meta.env.MODE === 'development'
            ? 'http://localhost:4000'
            : 'https://my-json-server.typicode.com/MicaellyUchoa/frontend-case',
});
