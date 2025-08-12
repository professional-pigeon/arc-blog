import styles from './PageHero.module.css';

// Would add propTypes but apparently it is not a default dependency
export default function PageHero({ showLink }) {

  // Todo: find free image for background of bgContainer and spread like wallpaper
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <h1>Portland Ramen Review</h1>
        <p>Discover the best Ramen shops in the Portland Metro</p>
        {showLink && <a href='/blog'>See All Reviews</a>}
      </div>
    </div>
  );
};