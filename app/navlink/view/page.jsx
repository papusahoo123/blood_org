export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-red-600 mb-5">
            Why Blood Donation Is Important
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Blood donation is one of the most valuable acts of kindness.
            A single donation can save multiple lives and provide hope to
            patients during emergencies, surgeries, and medical treatments.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-red-100 hover:shadow-red-200 transition duration-300">
            <h2 className="text-3xl font-bold text-red-500 mb-5">
              Save Lives Every Day
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              Every few seconds, someone around the world needs blood.
              Accident victims, surgery patients, cancer patients, and
              mothers during childbirth often require immediate blood support.
            </p>

            <p className="text-gray-700 text-lg leading-8 mt-5">
              Blood cannot be manufactured artificially, which means voluntary
              donors are the only source of life-saving blood for hospitals
              and patients.
            </p>

            <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300">
              Donate Blood
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-red-500 text-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">

            <h2 className="text-3xl font-bold mb-6">
              Benefits of Blood Donation
            </h2>

            <div className="space-y-5">

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-xl font-bold mb-2">
                  ❤️ Helps Save Lives
                </h3>
                <p className="leading-7">
                  One blood donation can help multiple patients in need.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-xl font-bold mb-2">
                  🩸 Supports Hospitals
                </h3>
                <p className="leading-7">
                  Hospitals rely on regular blood donations for emergencies.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-xl font-bold mb-2">
                  😊 Improves Community
                </h3>
                <p className="leading-7">
                  Blood donation creates a caring and supportive society.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Be Someone’s Hero
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-4xl mx-auto">
              Donating blood is simple, safe, and powerful. Your donation
              can give someone another chance at life. By becoming a donor,
              you are helping families, hospitals, and communities during
              critical moments.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">

              <div className="bg-red-50 rounded-2xl p-8 hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">🧑‍⚕️</div>
                <h3 className="text-2xl font-bold text-red-500 mb-3">
                  Emergency Care
                </h3>
                <p className="text-gray-600">
                  Blood is essential for emergency medical treatment.
                </p>
              </div>

              <div className="bg-red-50 rounded-2xl p-8 hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-red-500 mb-3">
                  Hospital Support
                </h3>
                <p className="text-gray-600">
                  Donations help hospitals maintain life-saving supplies.
                </p>
              </div>

              <div className="bg-red-50 rounded-2xl p-8 hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-red-500 mb-3">
                  Humanity First
                </h3>
                <p className="text-gray-600">
                  Blood donation spreads kindness and hope worldwide.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}