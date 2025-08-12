import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>{post.author}</p>
        <p>-</p>
        <p>{post.date}</p>
        <p>-</p>
        <p>{post.rating}</p>
      </div>
      <h3>{post.title}</h3>
      <p>{post.review}</p>
    </div>
  );
};