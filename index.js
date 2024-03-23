import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Pong!');
    }
);

app.listen(60, () => {
    console.log('Server is running on port 60');
    }
);