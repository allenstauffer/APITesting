const express = require('express')

const app = express()

const PORT = 8080

app.use(express.json())



app.get('/posts/:userid/:flag', (req, res) => {
    res.send(
        {
          "postId": 1,
          "id": 1,
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
        );
})

app.get('/albums/:userid/:flag', (req, res) => {
res.send({
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  })
});


app.get('/users/:userid/:flag', (req, res) => {

    if(req.params.flag == "albums")
    {
        res.send({
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
          })
    }
    else if(req.params.flag == "todos")
    {
        res.send({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          })

    }
    else if(req.params.flag == "posts")
    {
        res.send({
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
          })
//          return;
    }

    res.sendStatus(201).send("invalid flag")

    
});


app.post('/users/:username/:email', (req, res) => {
    console.log("made it here")
    res.send("Sucess")
});

var server = app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))



module.exports = server