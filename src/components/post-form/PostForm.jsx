import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE, Loader} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import notify from '../../utils/alert'

const PostForm = ({post}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || 'active',
    },
  })

  const userData = useSelector(state => state?.userData)

  const submit = async (data) => {
    setLoading(true)
    try {
      console.log('first', data)
      let file = null;
      if (data.featuredImage && data.featuredImage[0]) {
        file = await appwriteService.uploadFile(data.featuredImage[0]);
      }
      // if we have post mean that we are editing the existing post
      if(post){
          if(file) {
              appwriteService.deleteFile(post.featuredImage)
          }

          const dbPost = await appwriteService.updatePost(post.$id, {...data, featuredImage: file? file.$id : undefined})

          if(dbPost) navigate(`/post/${dbPost.$id}`)
          notify.success('Commit changes successfully')
      }
      // otherwise we are creating new post
      else{
          if(file) {
              const fileId = file.$id;
              data.featuredImage = fileId;
              const dbPost = await appwriteService.createPost({
                  ...data,
                  userId: userData.$id,
              });
              if(dbPost) navigate(`/post/${dbPost.$id}`);
          }
          notify.success('Article posted successfully')
      }
    } catch (error) {
      notify.error(error?.message)
    } finally {
      setLoading(false)
    }
  }

  const slugTransform = useCallback((value) => {
    if(value && typeof value === 'string'){
        return value.trim()
                .toLowerCase()
                .replace(/\s+/g, '-')
    }

    return ''
  }, [])

  React.useEffect(() => {
    const Subsciption = watch((value, {name}) => {
      if(name === 'title'){
        setValue('slug', slugTransform(value.title, {shouldValidate : true}))
      }
    })

    return () => {
      Subsciption.unsubscribe()
    }
  },[watch, slugTransform, setValue, navigate])

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap flex-col md:flex-row py-2.5'>
      <div className='w-full md:w-2/3 px-2'>
        <RTE
          label='Blog content'
          name='content'
          control={control}
          defaultValue={getValues('content')}
        />
      </div>

      <div className='w-full md:w-1/3 pl-4'>
          <Input
            label='Title: '
            placeholder='Blog-Title'
            className='mb-4 px-3 py-2 rounded text-fuchia-950 font-semibold'
            {...register('title', {required: true})}
          />

          <Input
            label='Slug: '
            placeholder='Blog-slug'
            className='mb-4 px-3 py-2 rounded text-fuchia-950 font-semibold'
            {...register('slug', {required: true})}
            onInput={(e) => {
              setValue('slug', slugTransform(e.currentTarget.value), {shouldValidate: true})
            }}
          />
          <Input
            label='Featured Image: '
            type='file'
            className='mb-4 px-3 py-2 rounded text-fuchia-950 bg-white font-semibold'
            accept='image/png, image/jpg, image/jpeg, image/gif'
            {...register('featuredImage', {required: !post})}
          />
          {
            post && (
              <div className='w-full mb-4'>
                <img
                  src={appwriteService.getFileDownload(post.featuredImage)}
                  alt={post.title}
                  className='rounded-lg'
                />
              </div>
            )
          }

          <Select
            options={["active", "inactive"]}
            label="Status"
            className='mb-4 px-3 py-2 rounded text-fuchia-950 font-semibold'
            {...register('status', {required: true})}
          />

          <Button type='submit' disabled={loading} bgColor={post && 'bg-green-500'} className='w-full mt-5 py-2 hover:bg-fuchsia-950 font-semibold flex justify-center items-center'>
            {
              loading ? (
                <div className='border border-l-4 border-r-4 border-t-0 border-b-0 animate-spin rounded-full p-3 border-gray-600'></div>
              ) : (
                post ? 'Publish the changes' : 'Publish your blog'
              )
            }
          </Button>
      </div>
    </form>
  )
}

export default PostForm