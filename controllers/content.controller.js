//Using fs and Path rather than adding a dB
const fs = require("fs");
const path = require("path");
const moment = require("moment");
module.exports = {
    getPosts: (req,res) => {
        //get all posts
        fs.readFile(path.join(__dirname, "../Posts/posts.json"), (err, data)=>{
            if(err){
                res.json(err);
                return;
            }
            let posts = JSON.parse(data);
            res.json(posts);
        });
        
    },

    createPost: (req, res)=> {
        //get the posts
        var data = JSON.parse(fs.readFileSync(path.join(__dirname, "../Posts/posts.json")));
        var newPost = req.body;
        newPost.id = data.posts.length+1;
        newPost.createdAt = moment().toString();
        data.posts.push(newPost);
        fs.writeFile(path.join(__dirname, "../Posts/posts.json"),JSON.stringify(data), (err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("posts updated successfully!");
        });
        res.json(data);
    },

    updatePost: (req,res) => {
        //get posts
        var data = JSON.parse(fs.readFileSync(path.join(__dirname, "../Posts/posts.json")));
        var index = parseInt(req.params.id) -1;
        const updatedPost = req.body;
        let keys = Object.keys(updatedPost);
        keys.forEach(key => {
            data.posts[index][key] = updatedPost[key];
        })
        data.posts[index].updatedAt = moment().toString();
        fs.writeFile(path.join(__dirname, "../Posts/posts.json"),JSON.stringify(data), (err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("posts updated successfully!");
        });
        res.json(data);
    },

    deletePost: (req,res) => {
        //get posts
        var data = JSON.parse(fs.readFileSync(path.join(__dirname, "../Posts/posts.json")));
        var index = parseInt(req.params.id) -1;
        var posts = [];
        data.posts.forEach((post,i) => {
            if(i === index ){
                return;
            }
            post.id = posts.length + 1;
            posts.push(post);
        });
        //update posts.json file
        data.posts = posts;
        fs.writeFile(path.join(__dirname, "../Posts/posts.json"),JSON.stringify(data), (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.json(data);
        });
        
    }

}