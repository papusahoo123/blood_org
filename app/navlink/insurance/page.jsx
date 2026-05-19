export default function Health() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-5">
            Why Health Insurance Is Important
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Health insurance provides financial protection during medical
            emergencies and helps families manage healthcare expenses
            without stress.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 hover:shadow-blue-200 transition duration-300">

            <h2 className="text-3xl font-bold text-blue-500 mb-5">
              Protection During Emergencies
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              Medical emergencies can happen anytime. Health insurance
              helps cover hospital bills, medicines, surgeries, and
              treatments so families do not face heavy financial pressure.
            </p>

            <p className="text-gray-700 text-lg leading-8 mt-5">
              A good insurance plan ensures faster medical support and
              access to quality healthcare services when needed most.
            </p>

            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300">
              Explore Plans
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-blue-500 text-white rounded-3xl shadow-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Benefits of Health Insurance
            </h2>

            <div className="space-y-5">

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">
                  🏥 Hospital Coverage
                </h3>

                <p className="leading-7">
                  Covers medical treatments, surgeries, and hospital stays.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">
                  💰 Financial Security
                </h3>

                <p className="leading-7">
                  Reduces unexpected healthcare expenses for families.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">
                  ❤️ Better Healthcare
                </h3>

                <p className="leading-7">
                  Helps people access quality doctors and hospitals quickly.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Secure Your Family’s Future
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-4xl mx-auto">
              Health insurance is not only about medical treatment —
              it also provides peace of mind. With the right coverage,
              families can focus on recovery instead of worrying about
              expensive healthcare costs.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">

              <div className="bg-blue-50 rounded-2xl p-8 hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">🩺</div>

                <h3 className="text-2xl font-bold text-blue-500 mb-3">
                  Regular Checkups
                </h3>

                <p className="text-gray-600">
                  Encourages preventive healthcare and routine medical tests.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">👨‍👩‍👧</div>

                <h3 className="text-2xl font-bold text-blue-500 mb-3">
                  Family Safety
                </h3>

                <p className="text-gray-600">
                  Protects loved ones during medical emergencies and illness.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">🌍</div>

                <h3 className="text-2xl font-bold text-blue-500 mb-3">
                  Peace of Mind
                </h3>

                <p className="text-gray-600">
                  Gives confidence and support during difficult health situations.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}