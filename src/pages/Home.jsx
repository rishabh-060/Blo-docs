import React from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard, SkeletonCard } from '../components/index'

const Home = () => {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    appwriteService.getPosts([]).then((post) => {
      if (post) setPosts(post.documents)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="w-full py-10">
        <Container>
          <div className="grid grid-cols-2 px-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
            {[...Array(10)].map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </Container>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <Container>
          <h1 className="text-2xl font-semibold text-white/80">
            No Articles Yet! <br /> Be the First to Write.
          </h1>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full pt-10 pb-4">
      <Container>
        <div className="grid grid-cols-2 px-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
