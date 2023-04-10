import styles from './RecentItems.module.css'

const RecentItems = (props) => {
  return (
    <div className={styles['recent_product_container']}>
      <div className={styles['recent_text']}>최근본상품</div>
      <div className="sc-hqyNC foQEfA">
        <div className={styles['count_text']}>1</div>
      </div>
      <div className="sc-dNLxif hnPUCb">
        <a
          className="image_a"
          href="/products/216669745?content_position=0&amp;content_owner=728474"
        >
          <img
            src="https://media.bunjang.co.kr/product/216669745_1_1679798936_w140.jpg"
            alt="상품 이미지"
            width="85px"
            height="85px"
          />
        </a>
      </div>
      <div className={styles['page_container']}>
        <button disabled="" className={styles['page_button_container']}>
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/1baa060ccafcca0e95e0.png"
            width="5"
            height="9"
            alt="화살표 아이콘"
          />
        </button>
        <div>1/1</div>
        <button disabled="" className={styles['page_button_container']}>
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/ba6928f2c9ad9e5dd954.png"
            width="5"
            height="9"
            alt="화살표 아이콘"
          />
        </button>
      </div>
    </div>
  );
};

export default RecentItems;
