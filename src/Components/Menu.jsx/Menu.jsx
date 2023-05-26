import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";

const Menu = () => {
  // const [menu] = useMenu();
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
          img={dessertImg}
        ></MenuCategory>
        <MenuCategory
          items={pizza}
          title={"pizza"}
          img={pizzaImg}
        ></MenuCategory>
        <MenuCategory
          items={salad}
          title={"salad"}
          img={saladImg}
        ></MenuCategory>
        <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      </div>
      );
    </div>
  );
};

export default Menu;
