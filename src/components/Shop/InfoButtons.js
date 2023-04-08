import './InfoButtons.css'

const InfoButtons = (props) => {
  return (
    <div className="info_btn_container">
      <a href="{() => false}" className="info_btn_focus">
        상품
        <span className="info_btn_text_focus">0</span>
      </a>
      <a href="{() => false}" className="info_btn_cancel">
        상점후기
        <span className="info_btn_text_cancel">0</span>
      </a>
      <a href="{() => false}" className="info_btn_cancel">
        찜<span className="info_btn_text_cancel">4</span>
      </a>
      <a href="{() => false}" className="info_btn_cancel">
        팔로잉
        <span className="info_btn_text_cancel">1</span>
      </a>
      <a href="{() => false}" className="info_btn_cancel">
        팔로워
        <span className="info_btn_text_cancel">1</span>
      </a>
    </div>
  );
};

export default InfoButtons;
