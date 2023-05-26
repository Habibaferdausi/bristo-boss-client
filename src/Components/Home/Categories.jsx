import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "./SectionTitle";

const Categories = () => {
  return (
    <div>
      <section className="mt-10">
        <SectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order Online"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-11 mb-24"
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-64"
            />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-xl">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/688802/pexels-photo-688802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-64 "
            />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-xl">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/5038075/pexels-photo-5038075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-64"
            />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-xl">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-64"
            />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-xl">
              Pasta
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3085148/pexels-photo-3085148.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-64"
            />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-xl">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Categories;
