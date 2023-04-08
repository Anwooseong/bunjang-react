import './InfoDetail.css'

const InfoDetail = (props) => {
  return (
    <div className="info_detail">
      <div className="title">
        <div>
          상품
          <span className="title_text">0</span>
        </div>
        <div className="type_container">
          <div className="type_btn">
            <span className="all">전체</span>
            <img
              className="drop_down"
              src="https://m.bunjang.co.kr/pc-static/resource/9b606ef2e7d57fafa657.png"
              width="10"
              height="6"
              alt="카테고리 화살표 아이콘"
            />
          </div>
        </div>
      </div>
      <div className="content">등록된 상품이 없습니다.</div>
    </div>
  );
};

export default InfoDetail;
