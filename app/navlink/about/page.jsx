export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-red-600 mb-4">
            About Our Medical Service
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are dedicated to helping people connect with blood donors,
            emergency medical support, and healthcare services quickly and
            safely.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 border border-red-100 hover:shadow-red-200 transition duration-300">
            <h2 className="text-3xl font-bold text-red-500 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Our platform is designed to make healthcare support more
              accessible for everyone. We provide an easy way for patients,
              donors, and hospitals to connect during emergencies.
            </p>

            <p className="text-gray-700 leading-8 text-lg mt-5">
              With a modern and user-friendly interface, users can search for
              blood donors by blood group and city, helping save valuable time
              in critical situations.
            </p>

            <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="bg-red-500 rounded-3xl p-10 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">
                Our Mission
              </h2>

              <p className="leading-8 text-lg">
                Our mission is to build a reliable medical support platform
                where people can quickly find help during emergencies. We aim
                to create a community that supports blood donation awareness
                and healthcare accessibility.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 text-center">
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p className="text-sm mt-2">Emergency Support</p>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 text-center">
                  <h3 className="text-3xl font-bold">100+</h3>
                  <p className="text-sm mt-2">Active Donors</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4">🩸</div>
              <h3 className="text-2xl font-bold text-red-500 mb-3">
                Fast Donor Search
              </h3>
              <p className="text-gray-600">
                Easily search blood donors by blood group and city location.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-red-500 mb-3">
                Trusted Service
              </h3>
              <p className="text-gray-600">
                Secure and reliable healthcare support for emergency needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-red-500 mb-3">
                Community Support
              </h3>
              <p className="text-gray-600">
                Connecting donors and patients to save lives together.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}