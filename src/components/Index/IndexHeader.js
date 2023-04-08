import BottomMenu from "./BottomMenu";
import TopMenu from "./TopMenu";
import './IndexHeader.css'

const IndexHeader = (props) => {
  return (
    <header className="header">
      <TopMenu />
      <BottomMenu />
    </header>
  );
};

export default IndexHeader;
