"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Fetch Topics
const Gettopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topics:", error);
    return { topics: [] };
  }
};

// Donor Card
const DonorCard = ({ topic, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-lg
        border
        border-cyan-100
        shadow-2xl
      "
    >
      {/* Animated Top Border */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        animate={{
          width: isHovered ? "100%" : "0%",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Blood Badge */}
      <div className="absolute top-3  right-4">
        <div className="px-5 py-1 mt-4   rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-black  font-bold shadow-lg">
          🩸 {topic.bloodType}
        </div>
      </div>

      <div className="p-8 flex flex-col gap-5">
        {/* Name */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl shadow-lg">
            👤
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Donor Name
            </p>

            <p className="text-xl font-bold text-gray-800">
              {topic.showName === false
                ? "Anonymous"
                : topic.name}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

        {/* Mobile */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 border border-green-100">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-md">
            📱
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Mobile
            </p>

            <p className="font-semibold text-gray-700">
              {topic.showMobile === false
                ? "Hidden"
                : topic.mobile}
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-xl shadow-md">
            📧
          </div>

          <div className="overflow-hidden">
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-semibold text-gray-700 break-all">
              {topic.showEmail === false
                ? "Hidden"
                : topic.email}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-xl shadow-md">
            📍
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Address
            </p>

            <p className="font-semibold text-gray-700">
              {topic.address}
            </p>
          </div>
        </div>


        {/* Message */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-xl shadow-md">
            💬
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Message
            </p>

            <p className="font-semibold text-gray-700 break-words">
              {topic.message}
            </p>
          </div>
        </div>

        {/* Button */}
        {/* <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-2
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
            text-white
            font-bold
            text-lg
            shadow-xl
          "
        >
          Contact Donor
        </motion.button> */}
      </div>
    </motion.div>
  );
};

  

const FloatingDrops = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const generatedDrops = [...Array(6)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      duration: 15 + i * 2,
      delay: i * 1.5,
    }));

    setDrops(generatedDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-5xl opacity-10"
          initial={{
            x: drop.x,
            y: -100,
          }}
          animate={{
            y: 1200,
            rotate: 360,
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            ease: "linear",
            delay: drop.delay,
          }}
        >
          🩸
        </motion.div>
      ))}
    </div>
  );
};








// Main Component
export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [bloodSearch, setBloodSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  //const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Data
  useEffect(() => {
    Gettopics().then((data) => {
      setTopics(data.topics || []);
      setIsLoading(false);
    });
  }, []);

 
  // Search Filter
  const filteredTopics = topics.filter((topic) => {
    const bloodMatch = topic.bloodType
      ?.toLowerCase()
      .includes(bloodSearch.toLowerCase());

    const cityMatch = topic.address
      ?.toLowerCase()
      .includes(citySearch.toLowerCase());

    return bloodMatch && cityMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-10 px-4 relative overflow-hidden">

      <FloatingDrops />

      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl  md:text-6xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-black">
            🩸 Blood Donor List
          </h1>

          <p className="text-transparent mt-4 text-lg">
            Search and find blood  type
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-5 mt-6 mb-2 flex-wrap">

            <div className="px-6 py-3 rounded-full bg-white shadow-lg border border-cyan-100">
              <span className="font-bold text-cyan-600">
                {topics.length}
              </span>
              <span className="ml-2 text-gray-500 ">
                Total Donors
              </span>
            </div>

            <div className="px-6 py-3 rounded-full bg-white shadow-lg border border-green-100">
              <span className="font-bold text-green-600">
                {filteredTopics.length}
              </span>
              <span className="ml-2 text-gray-500">
                Results
              </span>
            </div>

          </div>
        </motion.div>

       
      
        {/* Search */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-14"
        >

          {/* Blood Group Search */}
          <input
            type="text"
            placeholder="🩸 Search blood group..."
            value={bloodSearch}
            onChange={(e) => setBloodSearch(e.target.value)}
            className="
      w-full
      sm:w-[300px]
      md:w-[350px]
      px-8
      py-4
      rounded-full
      border-2
      border-red-200
      bg-white/90
      backdrop-blur-md
      shadow-2xl
      outline-none
      text-lg
      focus:ring-4
      focus:ring-red-300
      focus:border-red-500
      transition-all
      duration-300
    "
          />

          {/* City Search */}
          <input
            type="text"
            placeholder="🏙️ Search city..."
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
            className="
      w-full
      sm:w-[300px]
      md:w-[350px]
      px-8
      py-4
      rounded-full
      border-2
      border-cyan-200
      bg-white/90
      backdrop-blur-md
      shadow-2xl
      outline-none
      text-lg
      focus:ring-4
      focus:ring-cyan-300
      focus:border-cyan-500
      transition-all
      duration-300
    "
          />

          {/* Search Button */}
          <button
            type="submit"
            className="
      px-10
      py-4
      rounded-full
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-500
      text-white
      font-bold
      text-lg
      shadow-2xl
      hover:scale-105
      active:scale-95
      transition-all
      duration-300
    "
          >
            Search 🔍
          </button>

        </motion.form>






        {/* Loading */}
        <AnimatePresence mode="wait">

          {isLoading ? (
            <motion.div
              key="loading"
              className="flex justify-center py-20"
            >
              <motion.div
                className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ) : filteredTopics.length === 0 ? (

            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                max-w-2xl
                mx-auto
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                p-14
                shadow-2xl
                text-center
              "
            >
              <div className="text-6xl mb-4">
                😢
              </div>

              <p className="text-2xl font-bold text-gray-500">
                No donors found
              </p>

              <p className="text-gray-400 mt-2">
                Try another blood group
              </p>
            </motion.div>

          ) : (

            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {filteredTopics.map((topic, index) => (
                <DonorCard
                  key={topic._id}
                  topic={topic}
                  index={index}
                />
              ))}
            </motion.div>

          )}

        </AnimatePresence>
      </div>
    </div>
  );
}



