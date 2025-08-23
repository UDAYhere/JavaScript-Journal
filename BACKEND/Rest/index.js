const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const { v4: uuidv4 } = require('uuid');



let posts=[
    {
        id:uuidv4(),
        username: "uday kumar",
        content: "i love coding"
    },
    {
        id:uuidv4(),
        username: "abc kumar",
        content: "i love coding"
    },
    {
        id:uuidv4(),

        username: "xyz kumar",
        content: "i love coding"
    },
    {
        id:uuidv4(),
        username: "ttt kumar",
        content: "i love coding"
    }
];


app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

app.post('/posts', (req, res) => {
    // console.log(req.body);
    // res.send("post request is working properly");
    let {username, content} = req.body;
    let id=uuidv4();
    posts.push({id ,username, content});
    res.redirect("/posts");

    
});

app.get('/posts/:id', (req, res) => {
    let id = req.params.id;
    let post = posts.find((post) => post.id === id);
    res.render("show.ejs", { post });

});

app.patch('/posts/:id', (req, res) => {
    let id = req.params.id;
    let newcontent = req.body.content;
    let post = posts.find((p) => p.id === id);
    post.content = newcontent;
    res.redirect("/posts");

}    );
app.get('/posts/:id/edit', (req, res) => {
    let id = req.params.id;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs", { post });

});

app.delete('/posts/:id', (req, res) => {
    let id = req.params.id;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
