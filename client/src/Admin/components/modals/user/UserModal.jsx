import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { roleOptions } from "../../../../constants";
import FetchRequest from "../../../../utils/fetch";

const UserModal = ({ user, update, setModalOpen, setUpdateUserData }) => {
  const [userRole, setUserRole] = useState(user.role);
  console.log(userRole);

  const handleOnChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleUpdateRole = async () => {
    const { updatedUser, success } = await FetchRequest(
      `auth/admin/update`,
      "PUT",
      JSON.stringify({ role: userRole, email: user.email })
    );
    if (success) {
      setModalOpen(false);
      setUpdateUserData(true);
    }
  };

  useEffect(() => {
    setUserRole(user.role);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">User Details</h1>
      <form
        className="flex flex-col w-96 gap-2"
        action=""
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium py-1"
          >
            User Name
          </label>
          <input
            type="text"
            name="name"
            className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
            value={user.name}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium py-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
            value={user.email}
            readOnly
          />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium py-1"
            >
              Role
            </label>
            <select
              type="text"
              name="role"
              className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm capitalize"
              placeholder="Role"
              value={userRole}
              onChange={handleOnChange}
            >
              {roleOptions.map((opt) => (
                <option
                  className="capitalize"
                  key={opt}
                  value={opt}
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          {update ? (
            <button
              className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2 mx-2 my-2 m-auto"
              onClick={handleUpdateRole}
            >
              <AiOutlinePlus />
              Update
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default UserModal;
