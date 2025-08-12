'use client';
import PageHero from "@/components/PageHero";
import usePosts from "@/hooks/usePosts";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  const { posts, isLoaded } = usePosts({ view: 'all' })

  return (
    <div>
      <PageHero />
      <div className='page'>
        <h1>All Posts</h1>
        <div className='grid'>
          {isLoaded ? (
            posts.map((post) => { 
              return <PostCard post={post} />
            })) : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}
