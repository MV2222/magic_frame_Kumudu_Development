import { createContext, useState } from "react";

export const MagicFrameContext = createContext({
  frameDimensions: {},
  setFrameDimensions: () => {},
  noOfGods: "",
  setNoOfGods: () => {},
  godsList: [],
  setGodsList: () => {},
  accessories: "",
  setAccessories: () => {},
  godDimensions: {},
  setGodDimensions: () => {},
  maxGodDimensions: "",
  setMaxGodDimensions: () => {},
  selectedFrame: "",
  setSelectedFrame: () => {},
  corner: "",
  setCorner: () => {},
});

const MagicFrameContextProvider = ({ children }) => {
  const [frameDimensions, setFrameDimensions] = useState({
    width: "",
    height: "",
  });
  const [maxGodDimensions, setMaxGodDimensions] = useState({
    width: "",
    height: "",
  });
  const [godDimensions, setGodDimensions] = useState({
    width: "",
    height: "",
  });
  const [selectedFrame, setSelectedFrame] = useState("");
  const [noOfGods, setNoOfGods] = useState(0);
  const [godsList, setGodsList] = useState([]);
  const [accessories, setAccessories] = useState("");
  const [corner, setCorner] = useState("");

  return (
    <MagicFrameContext.Provider
      value={{
        frameDimensions,
        setFrameDimensions,
        noOfGods,
        setNoOfGods,
        godsList,
        setGodsList,
        accessories,
        setAccessories,
        godDimensions,
        setGodDimensions,
        maxGodDimensions,
        setMaxGodDimensions,
        selectedFrame,
        setSelectedFrame,
        corner,
        setCorner,
      }}
    >
      {children}
    </MagicFrameContext.Provider>
  );
};

export default MagicFrameContextProvider;
