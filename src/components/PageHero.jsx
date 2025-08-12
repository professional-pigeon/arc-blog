import styles from './PageHero.module.css'

export default function PageHero() {

  // Todo: find free image for background of bgContainer and spread like wallpaper
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <h1>Portland Ramen Guide</h1>
        <p>something to go here</p>
        <a href='/'>See all reviews</a>
      </div>
    </div>
  )
}