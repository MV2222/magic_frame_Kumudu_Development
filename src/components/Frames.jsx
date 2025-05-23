import { useContext } from "react";
import framesList from "../FramesData.json";
import { MagicFrameContext } from "../store/MagicFrameContext";

const Frames = () => {
  const { setSelectedFrame } = useContext(MagicFrameContext);

  return (
    <div className="gods-cont flex justify-center mt-[20px]   ">
      {framesList.map((frame) => {
        return (
          <div
            onClick={() => {
              setSelectedFrame(frame.image);
            }}
            style={{ boxShadow: "0 7px 15px rgb(70, 70, 70)" }}
            className="mx-[50px] hover:cursor-pointer transform transition-transform duration-400 hover:-translate-y-2.5"
          >
            <img style={{ height: "130px" }} src={frame.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Frames;
