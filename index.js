import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Pong!');
    }
);

app.listen(60, () => {
    console.log('Server is running on port 60');
    }
);