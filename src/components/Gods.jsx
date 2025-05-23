import { useContext } from "react";
import presentGodList from "../godsData.json";
import { MagicFrameContext } from "../store/MagicFrameContext";

const Gods = () => {
  const { godsList, setGodsList, noOfGods } = useContext(MagicFrameContext);

  const handleSelectGod = (god) => {
    setGodsList((prevList) => {
      if (prevList.length < noOfGods) {
        return [...prevList, god];
      } else {
        return [...prevList.slice(1), god]; //
      }
    });
  };

  return (
    <div className="gods-cont flex justify-center mt-[20px]   ">
      {presentGodList.map((god) => {
        return (
          <div
            onClick={() => {
              handleSelectGod(god);
            }}
            style={{ boxShadow: "0 7px 15px rgb(70, 70, 70)" }}
            className="mx-[50px] hover:cursor-pointer transform transition-transform duration-400 hover:-translate-y-2.5"
          >
            <img style={{ height: "170px" }} src={god.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Gods;
