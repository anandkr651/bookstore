import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function List() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [book,setBook] = useState([])

  useEffect(()=>{
  const getbook = async()=>{
    try {
      const res=await axios.get("http://localhost:4000/book")
      // console.log(res.data);
      setBook(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  getbook()
  },[])
  


  const filterbook = book.filter((data) => data.category === "free");
  // console.log(filterbook);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-10 pb-10 dark:bg-slate-200">
      <div className="py-10">
        <h1 className="font-semibold text-2xl text-pink-400 dark:text-pink-600">
          free offered courses
        </h1>
        <p className="dark:text-slate-800 text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          aliquid!
        </p>
      </div>
      <div className="slider-container overflow-hidden px-10">
        <Slider {...settings}>
          {filterbook.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default List;
