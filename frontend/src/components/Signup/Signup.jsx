import {NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from =location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const userInfo = {
      username :data.username,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4000/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("signup successfully")
        navigate(from,{replace:true})
        window.location.reload()
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
      } 
    })
  };
  return (
    <div className="flex items-center justify-center pt-28">
      <div className="modal-box bg-slate-100">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <NavLink
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ❌
          </NavLink>
        </form>
        <h3 className="font-bold text-lg">Signup!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3 py-2 text-black">
            <label htmlFor="" className="font-bold text-xl p-2">
              username <br />
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-2 rounded-xl outline-none border-[2px] bg-slate-100 font-bold"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-xl font-normal text-red-500">
                  This field is required
                </span>
              )}
            </label>
          </div>
          <div className="space-y-3 py-2 text-black">
            <label htmlFor="" className="font-bold text-xl p-2">
              Email <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-xl outline-none border-[2px] bg-slate-100 font-bold"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xl font-normal text-red-500">
                  This field is required
                </span>
              )}
            </label>
          </div>
          <div className="space-y-3 text-black">
            <label htmlFor="" className="text-xl font-bold p-2">
              Password <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded-xl outline-none border-[2px] bg-slate-100 font-bold"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-xl font-normal text-red-500">
                  This field is required
                </span>
              )}
            </label>
          </div>
          <div className="flex items-center justify-around  ">
            <button className="px-3 py-2 font-semibold text-2xl rounded-xl bg-pink-500 hover:bg-pink-600 my-3 hover:scale-105 duration-300">
              Signup
            </button>
            <p className="text-slate-800">
              Go to
              <NavLink to="/" className="text-blue-500 font-bold ">
                {" "}
                Home
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
