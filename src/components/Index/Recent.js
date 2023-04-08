import LikeItems from "./LikeItems";
import './Recent.css'
import RecentItems from "./RecentItems";

const Recent = (props) => {
  return (
    <div className="recent">
      <div class="sc-kgAjT Hmoi">
        <LikeItems />
        <RecentItems />
        <div className="top_container">
          <button className="top_text">TOP</button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
