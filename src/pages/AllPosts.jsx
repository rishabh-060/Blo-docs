import React from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components/index'
import { useSelector } from 'react-redux'

const AllPosts = () => {
  const [posts, setPosts] = React.useState([])
  const userData = useSelector(state => state.userData)

  React.useEffect(() => {
    appwriteService.getPosts(userData)
    .then((post) => {
        if(post) setPosts(post.documents)
    })
  }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard />
                            </div>
                    )))  : (
                        <p className='text-2xl font-semibold leading-wide tracking-wide text-fuchia-950'>No Post Avaiable</p>
                    )
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts