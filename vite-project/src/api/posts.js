export const getPosts = async (queryParams) => {
    const res = await fetch( 
        `${import.meta.env.VITE_BACKEND_URL}/posts?` + 
        new URLSearchParams(queryParams)
    )
    return await res.json()
}

export const createPost = async (post) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/posts`,    
        {
            //method means what kind of HTTP request we are making
            method: 'POST', 
            //headers are metadata about the request
            headers: { 'Content-Type': 'application/json' }, 
            //the body property contains the data we are sending to the server
            body: JSON.stringify(post),
        })
    return await res.json()
}