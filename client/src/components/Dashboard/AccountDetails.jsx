import { useEffect, useState } from "react"
import FetchRequest from "../../utils/fetch"
import { toast } from "react-hot-toast"


const AccountDetails = () => {
  const [credentials, setCredentials] = useState({firstname : "", lastname : "", phone:""})
  const getUserInfo = async()=>{
      const {userInfo} = await FetchRequest("userInfo", "GET", null)
      setCredentials({firstname : userInfo.firstname, lastname : userInfo.lastname, phone: userInfo.phone})
  }
  useEffect(()=>{
    getUserInfo()
  },[])

  const handleOnChange = (e)=>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    console.log(credentials.firstname, credentials.lastname, credentials.phone)
  }

  const handleSaveChanges = async(e)=>{
    e.preventDefault()
    
    const {success, userInfo} = await FetchRequest("userInfo", "POST", JSON.stringify({firstname: credentials.firstname, lastname: credentials.lastname, phone: credentials.phone}))
    if(success){
      toast.success("saved successfully")
    }else{
      toast.error("something went's wrong")
    }
  }
  return (
    <div className='flex w-full flex-[3] flex-col px-10'>
        <h1 className='text-lg font-semibold my-2'>Account Details</h1>
        <hr className='border-[2px] border-slate-400'/>
        <form className='flex w-full justify-center items-center flex-col gap-3 my-3 mx-2 '>
            <div className="flex w-full flex-col gap-2 md:w-3/4">
                <div className="flex flex-col gap-2">
                <label htmlFor="first-name"  className='text-base'>First Name</label>
                <input type="text" name="firstname" className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base " value={credentials.firstname} onChange={handleOnChange}/>
                </div>
               <div className='flex flex-col gap-2'>
               <label htmlFor="last-name" className='text-base'>Last Name</label>
                <input type="text" name="lastname" className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base " value={credentials.lastname} onChange={handleOnChange}/>
               </div>
            </div>
            <div className="flex flex-col  gap-2 w-full md:w-3/4">
                <label htmlFor="phone" className='text-base'>Phone Number</label>
                <input type="phone" name="phone" className="outline-0 border-[3px] border-slate-300 px-3 py-1 rounded-md text-base" value={credentials.phone} onChange={handleOnChange}/>
            </div>
            <button className='text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg mx-auto my-2' onClick={handleSaveChanges}>Save Changes</button>
        </form>
    </div>
  )
}

export default AccountDetails
