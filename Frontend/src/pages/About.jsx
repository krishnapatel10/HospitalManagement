import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        About CityCare
      </h1>

      {/* Section 1 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CityCare is committed to providing world-class healthcare with
            compassion, care, and advanced medical technology.  
            We bring together experienced doctors, modern treatments, and
            exceptional patient support to create a comfortable healing
            environment for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Our mission is to ensure quality healthcare that is affordable and
            accessible for all, with departments specializing in cardiology,
            orthopedics, neurology, pediatrics, and more.
          </p>
        </div>

        <img
          src="https://img.freepik.com/free-photo/smiley-doctor-with-stethoscope_23-2148522338.jpg"
          alt="Hospital"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Why Choose CityCare?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Expert Doctors</h3>
            <p className="text-gray-600">
              Our team includes experienced and qualified doctors across various specialties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Modern Facilities</h3>
            <p className="text-gray-600">
              Equipped with advanced medical technology for accurate diagnosis and treatment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Emergency care and patient assistance available around the clock.
            </p>
          </div>

        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-6xl mx-auto mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Our Vision
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
          To become the most trusted healthcare center that blends compassion,
          innovation, and excellence—ensuring a healthier future for every
          individual we serve.
        </p>
      </div>

    </div>
  );
}
