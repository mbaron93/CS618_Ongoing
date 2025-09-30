// eslint-disable-next-line no-unused-vars
import { Post} from '../components/Post.jsx'
// eslint-disable-next-line no-unused-vars
import { CreatePost } from '../components/CreatePost.jsx'
import { PostList } from '../components/PostList.jsx'
//import './App.css'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/posts.js'
import {Header} from '../components/Header.jsx'

// eslint-disable-next-line no-unused-vars
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
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  const posts2 = postQuery.data || []

  return (
  <div> 
  <Header />
    <PostList posts={posts2} />
  <CreatePost /> </div>
  )
}
