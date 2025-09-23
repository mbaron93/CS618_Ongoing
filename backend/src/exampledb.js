import { initDB } from './db/initdb.js' 
import { Post } from './db/models/post.js'

await initDB()

const post = new Post({ 
    title: 'Hello Mongoose!', 
    author: 'Daniel Bugl', 
    contents: 'This post is stored in a MongoDB database using Mongoose.', 
    tags: ['mongoose', 'mongodb'], })

await post.save()
const posts = await Post.find() 
console.log(posts)