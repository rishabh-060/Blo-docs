import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, Loader, PostForm } from '../components/index'
import { useNavigate, useParams } from 'react-router-dom'

const EditPosts = () => {
  const [posts, setPosts] = React.useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    if(slug){
        appwriteService.getPost(slug).then((postData) => {
          if (postData) setPosts(postData)
          else navigate('/') // fallback if no post found
        })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return posts ? (
    <div>
        <PostForm post={posts}/>
    </div>
  ) : <Loader text={'loading post data...'}/>
}

export default EditPosts