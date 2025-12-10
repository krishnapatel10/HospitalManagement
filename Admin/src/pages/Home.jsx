import React from "react";
import { Users, CalendarCheck, Stethoscope, Activity } from "lucide-react";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:5500/api/appointment");
      setData(res.data);
    }
    getData();

  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Admin Dashboard</h1>



      {/* LOWER SECTION */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {/* Recent Appointments */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Appointments</h2>

          {
            data.map((e,index) => (

              <div className="space-y-4">
                <div  key={index} className="border-b pb-2">
                  <p className="font-semibold">{e.patientName}</p>
                  <p className="text-gray-600 text-sm">Date:{e.date} — {e.time}</p>
                </div>

              </div>
            ))
          }
        </div>

        {/* Doctors List */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Doctors Overview</h2>

          <div className="space-y-3">
            <div className="p-3 border rounded-lg flex justify-between">
              <span>Dr. Mehta</span>
              <span className="text-blue-600 font-semibold">Cardiologist</span>
            </div>

            <div className="p-3 border rounded-lg flex justify-between">
              <span>Dr. Sharma</span>
              <span className="text-blue-600 font-semibold">Neurologist</span>
            </div>

            <div className="p-3 border rounded-lg flex justify-between">
              <span>Dr. Singh</span>
              <span className="text-blue-600 font-semibold">Orthopedic</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
