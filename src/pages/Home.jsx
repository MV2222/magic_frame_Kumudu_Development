import { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Gods from "../components/Gods";
import Decor from "../components/Decor";
import Frames from "../components/Frames";

const Home = () => {
  const [tab, setTab] = useState("");

  return (
    <>
      <Navbar></Navbar>
      <Dashboard tab={tab} setTab={setTab}></Dashboard>
      {tab === "gods" && <Gods />}
      {tab === "decor" && <Decor />}
      {tab === "frames" && <Frames />}
    </>
  );
};

export default Home;
