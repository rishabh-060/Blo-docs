import React from 'react'
import appwriteService from '../appwrite/config'
import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'

const PostCard = ({ $id, title, content, featuredImage }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/post/${$id}`)}
      className="cursor-pointer group transition-transform duration-300 hover:scale-[1.015]"
    >
      <div className="bg-fuchsia-950 border border-fuchsia-800 rounded-xl shadow-lg overflow-hidden text-white hover:shadow-fuchsia-700/40 transition-all duration-300">
        
        {/* Image section */}
        <div className="aspect-[16/9] overflow-hidden bg-fuchsia-900/30">
          <img
            src={appwriteService.getFileDownload(featuredImage)}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Text content */}
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-bold text-white line-clamp-1 group-hover:text-fuchsia-200 transition-colors">
            {title}
          </h2>
          <div className="text-sm text-white/80 line-clamp-4">
            {parse(content)}
          </div>

          {/* ID Tag */}
          <div className="pt-1">
            <span className="inline-block text-xs px-2 py-1 rounded-full bg-fuchsia-800 text-white/70 tracking-wide">
              #{String($id).slice(0, 6)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
