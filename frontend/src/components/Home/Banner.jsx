function Banner() {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 space-x-10 lg:pt-32 overflow-hidden dark:bg-slate-200">
      <div className="order-2 md:order-1 md:w-1/2 space-y-8">
        <h2 className="font-extrabold text-6xl dark:text-slate-800">
          Hello, welcome here to learn something{" "}
          <span className="text-pink-500 dark:text-pink-600">new everyday!!!</span>
        </h2>
        <p className="text-2xl font-medium italic dark:text-slate-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
          dignissimos repellat sunt nesciunt harum repellendus doloribus
          mollitia velit! Ex, accusantium fuga?
        </p>
        <label className="input input-bordered flex items-center gap-2 hover:scale-105 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow dark:text-slate-200" placeholder="Email" />
        </label>
        <button className="btn btn-active btn-secondary font-semibold text-xl hover:scale-105 duration-300">
          Secondary
        </button>
      </div>
      <div className="order-1 md:w-1/2 w-full">
        <img
          src="/hand-drawn-flat-design-stack-books-illustration.png"
          alt="book Image"
          className="lg:w-96 w-80 hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
}

export default Banner;
