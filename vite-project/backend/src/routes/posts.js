import e from 'express'
import{
    listAllPosts,
    listPostsByAuthor,
    listPostsByTag,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} from '../services/posts.js'

//create function postRoutes that receives an app object as a parameter
//and uses https commands inside of the app object to define routes for handling HTTP requests related to blog posts.
export function postRoutes(app) {
    //GET /posts: Retrieve a list of all blog posts.
    app.get('/api/v1/posts/', async (req, res) => {
        const { sortBy, sortOrder } = req.query
        try{
            if (author && tag) { 
                return res.status(400).json({ error: 'query by either author or tag, not both' })
            }
            else if (author) {
                const posts = await listPostsByAuthor(tag)
                res.json(posts)
            }else if (tag) {
                const posts = await listAllPosts(options)
                res.json(posts)
            }
            else{
                return res.json(await listAllPosts(options))
            }
        }catch (error) {
            console.error('Error fetching posts:', error)
            res.status(500).end()
        }
    })

}