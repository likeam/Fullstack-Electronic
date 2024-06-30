import express from 'express';

const app = express();

import 'dotenv/config'
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});