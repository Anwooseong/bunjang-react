import LikeItems from "./LikeItems";
import styles from './Recent.module.css'
import RecentItems from "./RecentItems";

const Recent = (props) => {
  return (
    <div className={styles["recent"]}>
      <div class="sc-kgAjT Hmoi">
        <LikeItems />
        <RecentItems />
        <div className={styles["top_container"]}>
          <button className={styles["top_text"]}>TOP</button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
