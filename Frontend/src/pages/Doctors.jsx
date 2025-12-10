import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Doctors() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    async function getdata() {
      let res = await axios.get("http://localhost:5500/api/doctor");
      setdata(res.data);
    }
    getdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Our Doctors
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {data.map((e, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center">
              
              {/* Doctor Avatar Circle */}
              <div className="w-24 h-24 bg-blue-100 text-blue-700 flex items-center justify-center text-3xl font-bold rounded-full mb-4">
                {e.name?.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-800">{e.name}</h2>

              {/* Specialization */}
              <p className="text-blue-600 font-medium mt-1">{e.specialization}</p>

              {/* Experience */}
              <p className="text-gray-500 mt-2">
                Experience: <span className="font-semibold">{e.experience} Years</span>
              </p>

              {/* Button
              <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Book Appointment
              </button> */}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
