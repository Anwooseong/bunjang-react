import { useEffect, useState } from "react";
import styles from "./TopBanner.module.css";

const imageList = [
  "https://media.bunjang.co.kr/images/nocrop/926900341_w2058.jpg",
  "https://media.bunjang.co.kr/images/nocrop/973145380_w2058.jpg",
  "https://media.bunjang.co.kr/images/nocrop/959246584_w2058.jpg",
];

const TopBanner = (props) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [effectCheck, setEffectCheck] = useState(false)

  const onLeftBtnHandler = () => {
    setImageIdx(
      (prevImageIdx) => (prevImageIdx - 1 + imageList.length) % imageList.length
    );
  };

  const onRightBtnHandler = () => {
    setImageIdx((prevImageIdx) => (prevImageIdx + 1) % imageList.length);
  };

  const useEffectCheckHandler = () => {
    setEffectCheck((prevState) => !prevState)
  }

  useEffect(() => {
    const intervalId = setInterval(onRightBtnHandler, 3000); // 3초마다 이미지를 오른쪽으로 이동
    console.log('마운트될때 코드')
    console.log(effectCheck)
    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트되면 인터벌을 클리어
      console.log('클린업 함수 호출')
    };
  }, [effectCheck]);

  return (
    <div className={`${styles["top_banner_container"]}`} onClick={useEffectCheckHandler}>
      <img
        src={imageList[imageIdx]}
        className={`${styles["top_banner_image"]}`}
        alt="이미지"
      />
      <button className={`${styles["left_shift_banner"]}`} onClick={onLeftBtnHandler}>
        <img
          src="https://m.bunjang.co.kr/pc-static/resource/2c3876a99680b4223594.png"
          alt="왼쪽 방향"
          width="20px"
          height="30px"
        />
      </button>
      <button className={`${styles["right_shift_banner"]}`} onClick={onRightBtnHandler}>
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
