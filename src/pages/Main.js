import BottomBanner from "../components/Index/BottomBanner";
import Recommend from "../components/Index/Recommend";
import TopBanner from "../components/Index/TopBanner";
import "./Main.css";
import BottomMenu from "../components/Index/BottomMenu";
import TopMenu from "../components/Index/TopMenu";
import Footer from "../components/Index/Footer";
import Recent from "../components/Index/Recent";

let DUMMY_ITEMS = [];

const Main = (props) => {
  for (let i = 0; i < 30; i++) {
    DUMMY_ITEMS = [
      ...DUMMY_ITEMS,
      {
        id: "a" + i,
        href: "{() => false}",
        src: "https://media.bunjang.co.kr/product/201216449_1_1680147427_w292.jpg",
        alt: "상품 이미지",
        title: "졸업사진 캐릭캐릭 체인지 의상 대여 코스프레 최저가",
        price: "15,000원",
        time: "23시간전",
      },
    ];
  }

  return (
    <div className="total">
      <header className="header">
        <TopMenu />
      </header>
      <div className="header">
        <BottomMenu />
      </div>
      <Recent />
      <section className="main">
        <TopBanner />
        <BottomBanner />
        <Recommend items={DUMMY_ITEMS} />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
