import styles from './LikeItems.module.css'

const LikeItems = (props) => {
  return (
    <div className={styles["like_container"]}>
      <div className="sc-ksYbfQ bQCLyJ" style={{fontWeight: "bold"}}>
        찜한상품
      </div>
      <div className="sc-frDJqD cBmoCL">
        <a
          className="sc-kvZOFW ijbwxu"
          href="/shop/80263876/favorites"
          style={{color: "red"}}
        >
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/f23127455135173fd3e9.png"
            width="9"
            height="9"
            alt="찜 아이콘"
          />
          4
        </a>
      </div>
    </div>
  );
};

export default LikeItems;
