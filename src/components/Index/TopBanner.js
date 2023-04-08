import './TopBanner.css'

const TopBanner = (props) => {
  return (
    <div className="top_banner_container">
      <img
        src="https://media.bunjang.co.kr/images/nocrop/959246584_w2058.jpg"
        className="top_banner_image"
        alt="이미지"
      />
      <button className="left_shift_banner">
        <img
          src="https://m.bunjang.co.kr/pc-static/resource/2c3876a99680b4223594.png"
          alt="왼쪽 방향"
          width="20px"
          height="30px"
        />
      </button>
      <button className="right_shift_banner">
        <img
          src="https://m.bunjang.co.kr/pc-static/resource/09961a6784ff4792906f.png"
          alt="오른쪽 방향"
          width="20px"
          height="30px"
        />
      </button>
    </div>
  );
};

export default TopBanner;
