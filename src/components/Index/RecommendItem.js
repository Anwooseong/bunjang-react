import styles from './RecommendItem.module.css'

const RecommendItem = (props) => {
  return (
    <a className={`${styles["product_item"]}`} href={props.href}>
      <img
        src={props.src}
        width="194"
        height="194"
        alt={props.alt}
      />
      <div className={`${styles["product_content"]}`}>
        <div className={`${styles["product_title"]}`}>
          <span>{props.title}</span>
        </div>
        <div className={`${styles["product_detail"]}`}>
          <span className={`${styles["product_price"]}`}>{props.price}</span>
          <span className={`${styles["product_time"]}`}>{props.time}</span>
        </div>
      </div>
    </a>
  );
};

export default RecommendItem;
