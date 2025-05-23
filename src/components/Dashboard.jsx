import SideBar from "./SideBar";
import MagicFrameViewport from "./MagicFrameViewport";
import Dimensions from "./Dimensions";
import GodDimentions from "./GodDimentions";

const Dashboard = ({ setTab, tab }) => {
  return (
    <>
      <div className="dash-box flex">
        <div>
          {" "}
          <SideBar setTab={setTab} currentTab={tab}></SideBar>{" "}
        </div>
        <div className="min-w-[80%]">
          <MagicFrameViewport />
        </div>
        <div className="w-[20%] bg-white">
          {(tab === "" || tab === "frames") && <Dimensions />}
          {(tab === "gods" || tab === "decor") && <GodDimentions />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
