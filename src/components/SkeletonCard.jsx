import React from 'react'

const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl bg-fuchsia-900/30 p-4 shadow-lg">
    <div className="w-full h-40 bg-fuchsia-800/40 rounded-lg mb-4"></div>
    <div className="h-4 bg-fuchsia-800/40 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-fuchsia-800/30 rounded w-full mb-1"></div>
    <div className="h-3 bg-fuchsia-800/30 rounded w-5/6 mb-1"></div>
    <div className="h-3 bg-fuchsia-800/30 rounded w-2/3"></div>
  </div>
)

export default SkeletonCard