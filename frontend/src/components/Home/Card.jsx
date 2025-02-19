function Card({ item, key }) {
  // console.log(item);

  return (
    <div>
      <div className="card bg-base-100 w-80 mb-10 hover:scale-105 duration-300 mx-auto">
        <figure>
          <img src={item.image} alt="book Image" />
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
    </div>
  );
}

export default Card;
