import { useContext, useEffect, useRef } from "react";
import { MagicFrameContext } from "../store/MagicFrameContext";

const MagicFrameViewport = () => {
  const {
    godsList,
    frameDimensions,
    noOfGods,
    accessories,
    godDimensions,
    setMaxGodDimensions,
    selectedFrame,
    corner,
    maxGodDimensions,
  } = useContext(MagicFrameContext);

  const oneSize = useRef();

  useEffect(() => {
    if (oneSize.current) {
      setMaxGodDimensions({
        Width: oneSize.current.offsetWidth,
        height: oneSize.current.offsetHeight,
      });
    }
  }, [noOfGods, godDimensions]);

  return (
    <div className="ml-[130px] pt-[70px] min-h-[70vh] bg-gray-300 flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(${selectedFrame})` }}
        className="overflow-x-auto p-[35px] bg-amber-300 "
      >
        <div
          style={{
            width: `${Number(frameDimensions.width) * 96 || 500}px`,
            height: `${Number(frameDimensions.height) * 96 || 250}px`,
            display: "grid",
            gridTemplateColumns: `repeat(${Math.max(
              1,
              Number(noOfGods)
            )}, 1fr)`,
          }}
          className="bg-black px-[40px] py-[40px] gap-[50px] relative"
        >
          {corner && (
            <>
              {" "}
              <img
                className="absolute"
                style={{ width: "50px", top: "5px", left: "5px" }}
                src={corner}
                alt=""
              />
              <img
                className="absolute"
                style={{
                  width: "50px",
                  top: "5px",
                  right: "5px",
                  transform: "rotate(90deg)",
                }}
                src={corner}
                alt=""
              />
              <img
                className="absolute"
                style={{
                  width: "50px",
                  bottom: "5px",
                  right: "5px",
                  transform: "rotate(180deg)",
                }}
                src={corner}
                alt=""
              />
              <img
                className="absolute"
                style={{
                  width: "50px",
                  bottom: "5px",
                  left: "5px",
                  transform: "rotate(270deg)",
                }}
                src={corner}
                alt=""
              />
            </>
          )}

          {Array.from({ length: noOfGods }).map((_, i) => (
            <div
              ref={oneSize}
              key={i}
              className=" w-full h-full flex justify-center items-center text-white bg-amber-300 font-bold relative"
            >
              {godsList[i] ? (
                <img
                  src={godsList[i].image}
                  alt={`God ${i + 1}`}
                  style={{
                    width: `${
                      Number(godDimensions.width) * 96 || maxGodDimensions.width
                    }px`,
                    height: `${
                      Number(godDimensions.height) * 96 ||
                      maxGodDimensions.height
                    }px`,
                  }}
                />
              ) : (
                "Empty"
              )}
              {accessories && i < noOfGods - 1 && (
                <div className="absolute bottom-0 right-[-50px]">
                  <img style={{ height: "100px" }} src={accessories} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicFrameViewport;
