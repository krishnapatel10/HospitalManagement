import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
  className="min-h-[80vh] bg-cover bg-center text-white px-4 text-center flex items-center justify-center"
  style={{
    backgroundImage: "url('https://www.itl.cat/pngfile/big/143-1437949_hospital-wallpaper-hospital-wallpaper-hd.jpg')",
    backgroundColor: "rgba(98, 78, 78, 0.6)",
    backgroundBlendMode: "overlay"
  }}
>
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
      Welcome to CityCare Hospital
    </h1>
    <p className="text-lg md:text-xl">
      Providing quality healthcare with compassion and excellence.
    </p>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="shadow-lg rounded-xl p-6 bg-blue-100 hover:bg-blue-200 transition">
            <h2 className="text-2xl font-semibold mb-2">Book Appointments</h2>
            <p>Easily schedule your consultation with our specialists.</p>
          </div>
          <div className="shadow-lg rounded-xl p-6 bg-green-100 hover:bg-green-200 transition">
            <h2 className="text-2xl font-semibold mb-2">Our Doctors</h2>
            <p>Meet our team of highly qualified and experienced doctors.</p>
          </div>
          <div className="shadow-lg rounded-xl p-6 bg-yellow-100 hover:bg-yellow-200 transition">
            <h2 className="text-2xl font-semibold mb-2">Departments</h2>
            <p>Explore our departments including Cardiology, Neurology, and more.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need urgent care?</h2>
        <p className="mb-6">Contact us or visit the emergency department immediately.</p>
        <a href="/appointment" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Book an Appointment
        </a>
      </section>
    </div>
  );
};

export default Home;
