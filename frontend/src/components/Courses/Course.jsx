import { useEffect, useState } from "react";
import axios from "axios"

function Course() {

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

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 dark:bg-slate-200">
      <div className="text-center lg:pt-40 pt-20">
        <h1 className="font-bold text-5xl lg:font-extrabold lg:text-7xl dark:text-slate-800">
          We are delighted to have you{" "}
          <span className="text-pink-500 dark:text-pink-700">Here :)</span>
        </h1>
        <p className="text-xl my-8 dark:text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          sint harum porro, repellendus ipsam exercitationem consectetur eaque
          voluptatum quis eum id consequatur et mollitia reprehenderit quibusdam
          perferendis laudantium ipsa inventore labore! Excepturi nesciunt
          repudiandae recusandae dolorem possimus ipsam pariatur quia eum et
          maiores eaque fugit ipsa dicta laudantium, delectus dignissimos.
        </p>
        <a href="/">
          <button className="bg-pink-500 text-xl font-bold px-5 py-3 rounded-xl mb-8 hover:bg-pink-950">
            Back
          </button>
        </a>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {book.map((item) => (
            <div  key={item.id} className="card bg-base-100 w-80 shadow-2xl mb-10 mx-auto hover:scale-105 duration-300">
              <figure>
                <img src={item.image} alt="book Image"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                  <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-between">
                  <div className="border-[2px] px-3 py-2 rounded-2xl text-2xl hover:bg-green-200 hover:text-black">
                    ₨ {item.price}
                  </div>
                  <div className="border-[2px] px-3 py-2 rounded-full hover:bg-pink-400 hover:text-white">
                    {item.sell}
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
