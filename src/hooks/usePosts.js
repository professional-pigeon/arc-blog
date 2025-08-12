import { useEffect, useState } from 'react';
import { blogPosts } from '@/constants/dummyData';

// Mimic an api fetch and set hook
export default function usePosts({ view }) {
  const [blogPostData, setBlogPostData] = useState({ posts: [], isLoaded: false })

  useEffect(() => {
    if (view === 'all') {
      return setBlogPostData({ posts: blogPosts, isLoaded: true })
    }
    const latestReviews = [blogPosts[0], blogPosts[1], blogPosts[2]]
    setBlogPostData({ posts: latestReviews, isLoaded: true })
  }, [])

  return { ...blogPostData }
}