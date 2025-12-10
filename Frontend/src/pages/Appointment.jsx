import axios from "axios";
import React, { useState } from "react";


function BookAppointment() {
    const [form, setForm] = useState({
        patientName: "",
        age: "",
        date: "",
        time: "",
        problem: "",
    });

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


    const handleSubmit = async (e) => {

        e.preventDefault();
        // let data = {
        //     patientName: e.target[1].value,
        //     age: e.target[2].value,
        //     date: e.target[3].value,
        //     time: e.target[4].value,
        //     problem: e.target[5].value,
        // }

        let res =  await axios.post("http://localhost:5500/api/appointment", form)

        console.log(res.data);


        alert("Appointment Booked Successfully!");
        console.log(res.data);
    };

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <textarea
            name="problem"
            placeholder="Describe Problem"
            value={form.problem}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl h-28 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
    );
}

export default BookAppointment;
