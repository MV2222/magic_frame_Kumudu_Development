import { useContext } from "react";
import decor from "../decorData.json";
import { MagicFrameContext } from "../store/MagicFrameContext";

const Decor = () => {
  const { setAccessories, setCorner } = useContext(MagicFrameContext);

  return (
    <div className="decor-cont flex justify-center ">
      {decor.accessories.map((accessory, i) => {
        return (
          <div
            onClick={() => setAccessories(accessory.image)}
            className="pt-[20px]"
          >
            <img
              style={{
                height: "170px",
                margin: "0 50px",
                boxShadow: "0 7px 15px rgb(70, 70, 70)",
              }}
              className="mx-[50px] hover:cursor-pointer transform transition-transform duration-400 hover:-translate-y-2.5"
              src={accessory.image}
              alt=""
            />
          </div>
        );
      })}
      {decor.corner.map((cor) => {
        return (
          <div onClick={() => setCorner(cor.image)} className="pt-[20px]">
            <img
              style={{
                height: "170px",
                margin: "0 50px",
                boxShadow: "0 7px 15px rgb(70, 70, 70)",
              }}
              className="mx-[50px] hover:cursor-pointer transform transition-transform duration-400 hover:-translate-y-2.5"
              src={cor.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Decor;
