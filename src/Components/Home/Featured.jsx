import React from "react";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <div
      className="featured-item bg-fixed bg-cover text-white pt-8 my-20"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
      }}
    >
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
        className=" bg-black bg-opacity-40 "
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-black bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            expedita hic dolorem, iusto vel suscipit nam excepturi debitis
            magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
            consectetur blanditiis laboriosam fugiat ea quia similique quam nisi
            reprehenderit numquam magnam nemo vitae cupiditate, atque maiores
            dicta minus pariatur. Perspiciatis nobis vero quas?
          </p>
          <button className="btn btn-outline border-0 bg-yellow-500 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
