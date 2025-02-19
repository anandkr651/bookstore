import toast from "react-hot-toast"
import { useAuth } from "../../context/AuthProvider"


function Logout() {
const [authUser,setAuthUser]= useAuth()
const handleLogout = ()=>{
  try {
    setAuthUser({...authUser,user:null})
    localStorage.removeItem("Users")
    toast.success("Loggout successfullly")
    window.location.reload()
  } catch (error) {
    toast.error(error)
  }
}
  return (
    <div className='bg-red-600 px-3 py-2 rounded-xl text-slate-100 text-2xl hover:scale-105 duration-300'>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Logout
