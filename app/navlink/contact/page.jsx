export default function  page() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-red-600 mb-5">
            Contact Support Team
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Our support team is available to help you with blood donation,
            emergency support, and medical assistance anytime you need.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-red-100">

            <h2 className="text-3xl font-bold text-red-500 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-5 bg-red-50 p-5 rounded-2xl">
                <div className="text-4xl">📞</div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Phone Number
                  </h3>

                  <p className="text-gray-600 text-lg">
                    +91  78945 33726
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-red-50 p-5 rounded-2xl">
                <div className="text-4xl">📧</div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Email Address
                  </h3>

                  <p className="text-gray-600 text-lg">
                     we will be
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-red-50 p-5 rounded-2xl">
                <div className="text-4xl">📍</div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Office Location
                  </h3>

                  <p className="text-gray-600 text-lg">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-red-500 rounded-3xl shadow-2xl p-10 text-white">

            <h2 className="text-3xl font-bold mb-8">
              Support Information
            </h2>

            <p className="text-lg leading-8 mb-8">
              Our medical support platform helps connect blood donors,
              patients, and hospitals quickly during emergencies.
              Feel free to contact us for any questions or assistance.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="mt-2">
                  Emergency Help
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="mt-2">
                  Active Donors
                </p>
              </div>

            </div>

            <button className="mt-10 bg-white text-red-500 hover:bg-red-100 px-6 py-3 rounded-xl font-bold shadow-lg transition duration-300">
              Contact Now
            </button>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            We Are Always Ready To Help
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-8">
            Whether you are looking for blood donors, medical support,
            or emergency assistance, our team is here to provide fast
            and reliable help for everyone.
          </p>

        </div>
      </div>
    </section>
  );
}