// eslint-disable-next-line no-unused-vars
import { Post} from './components/Post.jsx'
// eslint-disable-next-line no-unused-vars
import { CreatePost } from './components/CreatePost.jsx'
import { PostList } from './components/PostList.jsx'
import './App.css'

const posts = [
  {
    _id: '1',
    title: 'My first post',
    contents: 'This is my first post. I hope you like it.',
  },
  {
    _id: '2',
    title: 'My second post',
    contents: "This is my second post. I hope you like it.",
  }
]

export function Blog() {
  return (
  <> <PostList posts={posts} />
  <CreatePost /> </>
  )
}
