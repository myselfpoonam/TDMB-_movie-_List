import React, { useState } from "react";

const Status = () => {
  const [status, setStatus] = useState("Nothing");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="w-full  border border-gray-400 mt-8">
      <div className="p-4 flex justify-around ">
        <label className="flex items-center gap-4">
          <input
            type="radio"
            name="status"
            value="Hold List"
            onChange={handleChange}
            className="h-6 w-6 text-blue-500 cursor-pointer"
          />
          <span className="ml-2 text-gray-700">Hold List</span>
        </label>

        <div className="p-4">
          <label className="flex items-center gap-4">
            <input
              type="radio"
              name="status"
              value="Watching"
              onChange={handleChange}
              className="h-6 w-6 text-blue-500 cursor-pointer"
            />
            <span className="ml-2 text-gray-700">Watching</span>
          </label>
        </div>
        <div className="p-4">
          <label className="flex items-center gap-4">
            <input
              type="radio"
              name="status"
              value="Completed"
              onChange={handleChange}
              className=" h-6 w-6 text-blue-500 cursor-pointer"
            />
            <span className="ml-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>
      <div>
        <div colSpan="3" className="p-4 text-center">
          <span className="font-bold text-red-600">Status :</span> {status}
        </div>
      </div>
    </div>
  );
};

export default Status;
