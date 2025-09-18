//the following three import statements were added
//to enable the CreatePost component to work with the backend
//useMutation is for making changes to data on the server
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react' 
import { createPost, useQueryClient} from '../api/posts.js'

export function CreatePost() { 
    //the following three constants were added
    //to manage the state of the form inputs
    //and they work by using React's useState hook
    //useState is a way to create state variables in functional components
    const [title, setTitle] = useState('') 
    const [author, setAuthor] = useState('')
    const [contents, setContents] = useState('')

    //the createPostMutation constant uses the useMutation hook
    //it defines a mutation function that calls the createPost API function
    //this function sends a POST request to the backend to create a new post
    //the mutation function uses the title, author, and contents state variables
    //to send the data to the server
    const queryClient = useQueryClient()

    const createPostMutation = useMutation({
        mutationFn: () => createPost({ title, author, contents }),
        onSuccess: () => queryClient.invalidateQueries(['posts']),
    })
    
    const handleSubmit = (e) => { 
        //prevent the default form submission behavior which is
        //to reload the page
        e.preventDefault() 
        createPostMutation.mutate()
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3> Create Post</h3>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input
          type='text'
          name='create-title'
          id='create-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input
          type='text'
          name='create-author'
          id='create-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <br />
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      /><br />
      <br />
      <input type='submit' 
      value={createPostMutation.isPending ? 'Creating...' : 'Create'} 
      disabled={!title || createPostMutation.isPending}
      />
    </form>
  )
}