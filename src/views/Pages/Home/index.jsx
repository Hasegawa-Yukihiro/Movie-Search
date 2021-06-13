import React from "react";

/** 🟢 useContext */
export const Title = React.createContext();

// atomic components
import { HomeTemplate } from "~views/Components/Template/HomeTemplate";

const Home = () => {
  return (
    <Title.Provider value={"Movie Search"}>
      <HomeTemplate />;
    </Title.Provider>
  );
};

export default Home;
