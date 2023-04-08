import './ProfileRight.css'

const ProfileRight = (props) => {
  return (
    <div className="profile_right_container">
      <div className="name">
        <div className="name_left">
          <span>안우성하</span>
          <button className="shop_name_modify">상점명 수정</button>
        </div>
        <div className="name_right">
          <span className="ok">OK</span>
          본인인증 완료
        </div>
      </div>
      <div className="info">
        <div className="shop_text">
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/4b323fe1ef79c2b715fe.png"
            width="14"
            height="13"
            alt="상점오픈일 아이콘"
          />
          상점오픈일
          <span className="shop_detail_text">175일 전</span>
        </div>
        <div className="shop_text">
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/e6792c64a6ba6f2b10a2.png"
            width="14"
            height="13"
            alt="상점방문수 아이콘"
          />
          상점방문수
          <span className="shop_detail_text">0 명</span>
        </div>
        <div className="shop_text">
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/ef9d606d24890f02bde0.png"
            width="14"
            height="13"
            alt="상품판매 아이콘"
          />
          상품판매
          <span className="shop_detail_text">0 회</span>
        </div>
        <div className="shop_text">
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/b6ca1c340805703d7c62.png"
            width="14"
            height="13"
            alt="상퓸발송 아이콘"
          />
          택배발송
          <span className="shop_detail_text">0 회</span>
        </div>
      </div>
      <div className="introduction">ㄹㄹㄹㄹㄹㄹ</div>
      <div className="modify">
        <button className="modify_btn">소개글 수정</button>
      </div>
    </div>
  );
};

export default ProfileRight;
