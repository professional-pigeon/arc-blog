import styles from './PageHeader.module.css'

export default function PageHeader() {
  return (
    <div className={styles.header}>
      <h1>Portland Ramen Guide</h1>
      <p>An exploration of ramen through the years</p>
      <div className={styles.row}>
        <a>Home</a>
        <a>Blog</a>
        <a>About</a>
      </div>
    </div>
  )
}