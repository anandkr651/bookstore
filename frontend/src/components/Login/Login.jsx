import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo = {
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4000/user/login",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('login successfully!');
       setTimeout(()=>{
        document.getElementById("my_modal_3").close()
        window.location.reload()
        localStorage.setItem("Users",JSON.stringify(res.data.user))
       },3000)
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
        setTimeout(()=>{},3000)
      } 
    })
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-100">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>
              ❌
            </button>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3 py-2">
            <label htmlFor="" className="font-bold text-xl p-2">Email <br/>
                <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded-xl outline-none bg-slate-100 dark:bg-slate-50 dark:border font-bold text-black"
                {...register("email", { required: true })}
                />
                {errors.email && <span className="text-xl font-normal text-red-500">This field is required</span>}
                </label>
          </div>
          <div className="space-y-3 ">
          <label htmlFor="" className="text-xl font-bold p-2">Password <br/>
                <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full p-2 rounded-xl bg-slate-100 outline-none dark:bg-slate-50 dark:border"
                {...register("password", { required: true })}
                />
                {errors.password && <span className="text-xl font-normal text-red-500">This field is required</span>}
                </label>
          </div>
          <div className="flex items-center justify-between ">
        <button className="px-3 py-2 font-semibold text-2xl rounded-xl bg-pink-500 hover:bg-pink-600 my-3 hover:scale-105 duration-300">login</button>
        <p className="dark:text-slate-800">Not Register 
       <NavLink to="/signup" className="text-blue-500 font-bold "> signup</NavLink>
        </p>
          </div>
        </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;