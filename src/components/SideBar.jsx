import { PiFrameCorners } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import { FaUserGroup } from "react-icons/fa6";
import { RiAlignItemLeftLine } from "react-icons/ri";

const SideBar = ({ setTab, currentTab }) => {
  return (
    <div className="w-[120px] mt-[50px] fixed ">
      <ul className="border-transparent pl-2.5">
        <li
          onClick={() => setTab("")}
          className={`flex flex-col items-center gap-1.5 my-[40px] px-4 hover:cursor-pointer ${
            currentTab === "" ? "bg-gray-800 text-white rounded-xl p-2" : ""
          }`}
        >
          <RxDimensions className="text-4xl" />
          Dimensions
        </li>
        <li
          onClick={() => setTab("frames")}
          className={`flex flex-col items-center gap-1.5 my-[40px] px-4 hover:cursor-pointer ${
            currentTab === "frames"
              ? "bg-gray-800 text-white rounded-xl p-2"
              : ""
          }`}
        >
          <PiFrameCorners className="text-4xl" />
          Frames
        </li>

        <li
          onClick={() => setTab("gods")}
          className={`flex flex-col items-center gap-1.5 my-[40px] px-4 hover:cursor-pointer ${
            currentTab === "gods" ? "bg-gray-800 text-white rounded-xl p-2" : ""
          }`}
        >
          <FaUserGroup className="text-4xl" />
          Gods
        </li>
        <li
          onClick={() => setTab("decor")}
          className={`flex flex-col items-center gap-1.5 my-[40px] px-4 hover:cursor-pointer ${
            currentTab === "decor"
              ? "bg-gray-800 text-white rounded-xl p-2"
              : ""
          }`}
        >
          <RiAlignItemLeftLine className="text-4xl" />
          Decoratives
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
