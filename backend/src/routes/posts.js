import {
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  createPost,
} from "../services/posts.js";

//create function postRoutes that receives an app object as a parameter
//and uses https commands inside of the app object to define routes for handling HTTP requests related to blog posts.
export function postRoutes(app) {
  //GET /posts: Retrieve a list of all blog posts.
  app.get("/posts", async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.query;
    const options = { sortBy, sortOrder };
    try {
      if (author && tag) {
        return res
          .status(400)
          .json({ error: "query by either author or tag, not both" });
      } else if (author) {
        const posts = await listPostsByAuthor(author, options);
        res.json(posts);
      } else if (tag) {
        const posts = await listPostsByTag(tag, options);
        res.json(posts);
      } else {
        return res.json(await listAllPosts(options));
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).end();
    }
  });

  //other routes related to posts can be added here
  //first, starting with the create post route
  app.post("/posts", async (req, res) => {
    try {
      const post = await createPost(req.body);
      return res.json(post);
    } catch (err) {
      console.error("error creating post", err);
      return res.status(500).end();
    }
  });

  //need to add update and delete routes
  //once id system is set up
}
