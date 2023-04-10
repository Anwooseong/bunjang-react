import styles from "./Recommend.module.css";
import RecommendItem from "./RecommendItem";

const Recommend = (props) => {
  return (
    <div className={`${styles['recommend_container']}`}>
      <span className={`${styles['recommend_title']}`}>오늘의 추천 상품</span>
      <div className={`${styles['grid_container']}`}>
        {props.items.map((item) => (
          <RecommendItem
            key={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            time={item.time}
            alt={item.alt}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
