import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import MenuCategory from "./MenuCategory";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../Home/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <div>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover
          img="https://images.pexels.com/photos/2922312/pexels-photo-2922312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="our menu"
        ></Cover>
        {/* main cover */}
        <SectionTitle
          subHeading="Don't Miss"
          heading="Today's Offer"
        ></SectionTitle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu items  */}
        <MenuCategory
          items={desserts}
          title="dessert"
          img="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></MenuCategory>
        <MenuCategory
          items={pizza}
          title={"pizza"}
          img="https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></MenuCategory>
        <MenuCategory
          items={salad}
          title={"salad"}
          img="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></MenuCategory>
        <MenuCategory
          items={soup}
          title={"soup"}
          img="https://images.pexels.com/photos/5865282/pexels-photo-5865282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
