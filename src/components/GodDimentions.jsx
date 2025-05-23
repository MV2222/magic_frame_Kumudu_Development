import { useContext, useState } from "react";
import { MagicFrameContext } from "../store/MagicFrameContext";

const GodDimentions = () => {
  const { setGodDimensions, maxGodDimensions } = useContext(MagicFrameContext);

  const [dimensions, setDimensions] = useState({ width: "", height: "" });

  const handleDimensionsChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof maxGodDimensions.height);
    if (
      maxGodDimensions.Width / 96 < dimensions.width ||
      maxGodDimensions.height / 96 < dimensions.height
    ) {
      alert("God size exceed the frame");
    } else {
      setGodDimensions(dimensions);
    }
  };
  return (
    <>
      <div className=" pt-[120px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px] p-[20px]"
        >
          {/* Inputs row */}

          <div className=" bg-gray-200 p-2 text-black rounded">
            <label className="block mb-1">God's Dimensions</label>
            <input
              className="border w-full mb-2 p-1 text-black"
              placeholder="Width"
              type="number"
              name="width"
              value={dimensions.width}
              onChange={handleDimensionsChange}
            />
            <input
              className="border w-full p-1 text-black"
              placeholder="Height"
              type="number"
              name="height"
              value={dimensions.height}
              onChange={handleDimensionsChange}
            />
          </div>
          <button className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default GodDimentions;
