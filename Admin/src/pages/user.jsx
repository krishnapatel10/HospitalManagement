import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:5500/api/user");
      setData(res.data);
    }
    getData();
  }, []);

   const deleteAppointment = async (id) => {

   await axios.delete(`http://localhost:5500/api/user/${id}`);
    

    alert("Appointment deleted successfully!");
    
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        All Users
      </h1>

      {data.length === 0 && (
        <p className="text-gray-600 text-lg">No users found.</p>
      )}

      {/* Users Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((e, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800">{e.Name}</h2>

            <p className="text-gray-600 mt-1">
              <span className="font-semibold">Email:</span> {e.email}
            </p>

            <p className="text-gray-500 mt-1 truncate">
              <span className="font-semibold">Password:</span> ••••••••
            </p>

            <button onClick={()=>deleteAppointment(e._id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
