import { Post } from '../db/models/post.js'
 export async function createPost({ title, author, contents, tags }) { 
    const post = new Post({ title, author, contents, tags }) 
    return await post.save() 
}

async function listPosts( 
    query = {}, 
    { sortBy = 'createdAt', sortOrder = 'descending' } = {}, ) {
    return await Post.find(query).sort({ [sortBy]: sortOrder }) 
}

export async function listAllPosts(option){
    return await listPosts({}, option)
}

export async function listPostsByAuthor(author, option) {
    return await listPosts({ author}, option) 
}

export async function listPostsByTag(tags, option) {
    return await listPosts({tags}, option) 
}

export async function getPostById(postId) {
    return await Post.findById(postId) 
}

export async function updatePost(postId, { title, author, contents, tags }) { 
    return await Post.findOneAndUpdate( { _id: postId }, { $set: { title, author, contents, tags } },
        { new: true }, ) 
    }

export async function deletePost(postId) { 
    return await Post.deleteOne({ _id: postId }) 
}