import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
