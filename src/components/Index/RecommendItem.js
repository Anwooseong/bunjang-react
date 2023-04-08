import './RecommendItem.css'

const RecommendItem = (props) => {
  return (
    <a className="product_item" href={props.href}>
      <img
        src={props.src}
        width="194"
        height="194"
        alt={props.alt}
      />
      <div className="product_content">
        <div className="product_title">
          <span>{props.title}</span>
        </div>
        <div className="product_detail">
          <span className="product_price">{props.price}</span>
          <span className="product_time">{props.time}</span>
        </div>
      </div>
    </a>
  );
};

export default RecommendItem;
