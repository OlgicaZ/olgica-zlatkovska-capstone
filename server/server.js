const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_request, response) => {
    response.send('Welcome home!')
})

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});