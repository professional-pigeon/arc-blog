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
      <h3><a href='/blog'>{post.title}</a></h3>
      <p className={styles.review}>{post.review}/5</p>
    </div>
  );
};