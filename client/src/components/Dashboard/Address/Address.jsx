import { useState } from "react";
import SavedAddress from "./SavedAddress";
import { useSelector } from "react-redux";
import AddAddressForm from "./AddAddressForm";
import UpdateAddress from "./UpdateAddress";

const Address = () => {
  const [isAddForm, setIsAddForm] = useState(true);
  const [updateFormData, setUpdateFormDate] = useState()
  const handleAddAddressClick = () => {
    setIsAddForm(true);
  };

  const { address } = useSelector((state) => state.address);
  return (
    <div className="flex w-full flex-[3] flex-col md:px-10 ">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-lg font-semibold my-2">Add Address</h1>
        {
          <button
            className="text-base font-medium rounded-lg border-slate-40w-800  outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg my-2"
            onClick={handleAddAddressClick}
          >
            Add Address
          </button>
        }
      </div>
      <hr className="border-[2px] border-slate-400 " />
      <div className="flex w-full flex-col gap-2 items-center my-2 min-h-[150px]">
        {address.map((address) => {
          return (
            <SavedAddress
              key={address._id}
              address={address}
              setIsAddForm={setIsAddForm}
              setUpdateFormDate={setUpdateFormDate}
            />
          );
        })}
      </div>

      {isAddForm ? <AddAddressForm setIsAddForm={setIsAddForm}/> : <UpdateAddress key={updateFormData._id} updateFormData={updateFormData} setIsAddForm={setIsAddForm}/>}
      <></>
    </div>
  );
};

export default Address;
