import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/contact', (req, res) => {
    res.send('This is contact page.')
})

app.listen(port, ()=> {
    console.log(`App is listening on ${port}`)
});