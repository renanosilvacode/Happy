import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) =>{
    return response.json({ message: 'Hello Node'});
})

app.listen(3333);