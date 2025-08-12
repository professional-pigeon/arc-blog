import styles from './PageHeader.module.css'

export default function PageHeader() {
  return (
    <div className={styles.header}>
      <h1>Ramen Blog</h1>
      <div className={styles.row}>
        <a href='/' className={styles.link}>Home</a>
        <a href='/blog' className={styles.link}>Blog</a>
        <a href='/about' className={styles.link}>About</a>
      </div>
    </div>
  )
}