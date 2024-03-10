const axios = require('axios');
const express = require('express');

const app = express();

app.get('/api', async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.send(response.data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});