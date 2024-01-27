import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/jokes', (req, res) => { 

    const jokes = [
        {
            id: 1,
            title: "pet",
            content: "I love my dog"
        }, 
        {
            id: 2,
            title: "another one",
            content: "This is 2nd joke with no laugh"
        }, 
        {
            id: 3,
            title: "third one",
            content: "I love my sky"
        }, 
        {
            id: 4,
            title: "Minati",
            content: "This is the Minati"
        }, 
    ]

    res.send(jokes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});