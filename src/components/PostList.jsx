// eslint-disable-next-line no-unused-vars
import { Fragment } from 'react' 
import PropTypes from 'prop-types' 
import { Post } from './Post.jsx'

export function PostList({ posts }) {
    return (
    <div>
        {posts.map((post) => (
            <Post {...post} key={post._id} />
        ))}
    </div>
  )
}

PostList.propTypes = { 
    posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired, 
}