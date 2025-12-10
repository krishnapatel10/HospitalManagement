import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Appointments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:5500/api/appointment");
      setData(res.data);
    }
    getData();

  }, []);


  const deleteAppointment = async (id) => {

   await axios.delete(`http://localhost:5500/api/appointment/${id}`);
    

    alert("Appointment deleted successfully!");
    
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        All Appointments
      </h1>

      {data.length === 0 && (
        <p className="text-gray-600 text-lg">No appointments found.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((e, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {e.patientName}
            </h2>

            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Age:</span> {e.age}
            </p>

            <p className="text-blue-600 font-semibold mt-1">
              Date: {e.date}
            </p>

            <p className="text-purple-600 font-semibold">
              Time: {e.time}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Problem:</span> {e.problem}
            </p>

            <button onClick={()=>deleteAppointment(e._id)} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
