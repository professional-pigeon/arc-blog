'use client';
import PageHero from "@/components/PageHero";
import usePosts from "@/hooks/usePosts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const { posts, isLoaded } = usePosts({ view: 'latest' })
  return (
    <div>
      <PageHero showLink />
      <div className='page'>
        <h1>Latest Ramen Reviews</h1>
        <div className='grid'>
          {isLoaded ? (
            posts.map((post) => { 
              return <PostCard post={post} />
            })) : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};
