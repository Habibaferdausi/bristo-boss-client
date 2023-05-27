import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "./OrderTab";
import "react-tabs/style/react-tabs.css";

const Orders = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover
        img="https://images.pexels.com/photos/4551619/pexels-photo-4551619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Order Food"
      ></Cover>
      <Tabs
        className="text-center mt-10 mb-10 text-lg font-semibold text-yellow-500"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Orders;
