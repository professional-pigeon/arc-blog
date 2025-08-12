'use client';
import PageHero from "@/components/PageHero";
import styles from './page.module.css';
import usePosts from "@/hooks/usePosts";

export default function Home() {
  const { posts, isLoaded } = usePosts()
  return (
    <div>
      <PageHero showLink />
      <div className={styles.page}>
        <h1>Latest Ramen Reviews</h1>
        {isLoaded ? (
          posts.map((post) => { 
            return <p>{post.id}</p>
          })) : <p>Loading...</p>}
      </div>
    </div>
  );
};
