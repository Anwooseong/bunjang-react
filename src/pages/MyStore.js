import BottomMenu from "../components/Index/BottomMenu";
import Footer from "../components/Index/Footer";
import TopMenu from "../components/Index/TopMenu";
import Info from "../components/Shop/Info";
import Profile from "../components/Shop/Profile";
import './MyStore.css'

const MyStore = (props) => {
  return (
    <div>
      <header className="header">
        <TopMenu />
      </header>
      <div className="header">
        <BottomMenu />
      </div>

      <section>
        <Profile />
        <Info />
      </section>
      <Footer />
    </div>
  );
};

export default MyStore;
