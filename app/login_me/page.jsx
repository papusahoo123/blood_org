 


// "use client";

// import { useEffect, useState } from "react";
// import { HiPencilAlt } from "react-icons/hi";
// import RemoveBtn from "../comp/RemoveBtn";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// export default function TopicsList() {

//   const searchParams = useSearchParams();

//   const bloodSearch = searchParams.get("blood") || "";

//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // password states
//   const [password, setPassword] = useState("");
//   const [isVerified, setIsVerified] = useState(false);

//   // keep login after refresh/search
//   useEffect(() => {

//     const verified = localStorage.getItem("verified");

//     if (verified === "true") {
//       setIsVerified(true);
//     }

//   }, []);

//   // fetch topics
//   useEffect(() => {

//     const fetchTopics = async () => {

//       try {

//         const res = await fetch("http://localhost:3000/api/topics", {
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch topics");
//         }

//         const data = await res.json();

//         setTopics(data.topics);

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }
//     };

//     fetchTopics();

//   }, []);

//   // search filter
//   const filteredTopics = topics.filter((topic) =>
//     topic.bloodType
//       .toLowerCase()
//       .includes(bloodSearch.toLowerCase())
//   );

//   // password submit
//   const handlePassword = (e) => {

//     e.preventDefault();

//     if (password === "1234") {

//       setIsVerified(true);

//       // save login
//       localStorage.setItem("verified", "true");

//     } else {

//       alert("Wrong Password");

//     }
//   };

//   // logout
//   const handleLogout = () => {

//     localStorage.removeItem("verified");

//     setIsVerified(false);

//   };

//   // PASSWORD PAGE
//   if (!isVerified) {

//     return (
//       <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">

//         <form
//           onSubmit={handlePassword}
//           className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
//         >

//           <h1 className="text-2xl font-bold text-cyan-600 mb-6 text-center">
//             Enter Password
//           </h1>

//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border-2 border-cyan-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
//           />

//           <button
//             type="submit"
//             className="w-full mt-5 bg-cyan-500 text-white py-3 rounded-lg font-bold hover:bg-cyan-600 transition-all"
//           >
//             Verify
//           </button>

//         </form>
//       </div>
//     );
//   }

//   // MAIN PAGE
//   return (
//     <>

//       {/* Top Buttons */}
//       <div className="flex flex-col sm:flex-row gap-3 mt-4 mb-4 justify-center items-center px-4">

//         {/* Search */}
//         <form className="flex gap-3  w-full max-w-2xl">

//           <input
//             type="text"
//             name="blood"
//             placeholder="Search blood group..."
//             defaultValue={bloodSearch}
//             className="text-black border-2 border-cyan-500 px-6 py-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
//           />

//           <button
//             type="submit"
//             className="bg-cyan-500 text-white px-5 py-3 rounded-lg font-bold hover:bg-cyan-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
//           >
//             Search
//           </button>
//         </form>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-5 py-4 rounded-full font-bold hover:bg-red-600 transition-all"
//         >
//           Logout
//         </button>

//       </div>

//       <br />

//       {/* Topics */}
//       <div className="flex flex-col gap-4 max-w-5xl mx-auto px-4">

//         {loading ? (

//           <p className="text-center text-xl font-bold">
//             Loading...
//           </p>

//         ) : filteredTopics.length === 0 ? (

//           <p className="text-center text-xl font-bold text-gray-500">
//             No donors found
//           </p>

//         ) : (

//   filteredTopics.map((topic) => (

//             <div
//               key={topic._id}
//               className="flex gap-4 bg-cyan-500 shadow-md w-full p-4 rounded-lg items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//             >

//               <p className="font-bold text-gray-800">
//                 Name: {topic.name}
//               </p>

//               <p className="font-bold text-white">
//                 Blood Group: {topic.bloodType}
//               </p>

//               <p className="font-bold text-gray-800">
//                 Mobile: {topic.mobile}
//               </p>

//               <p className="text-gray-800">
//                 {topic.email}
//               </p>

//               <p className="text-gray-800">
//                 Address: {topic.address}
//               </p>
//                <p className="text-gray-800">
//                 Message: {topic.message}
//               </p>

//               <div className="flex gap-3 items-center">

//                 <div className="hover:scale-110 transition-transform">
//                   <RemoveBtn id={topic._id} />
//                 </div>

//                 <Link
//                   href={`/editTopic/${topic._id}`}
//                   className="hover:scale-110 transition-transform active:rotate-12"
//                 >
//                   <HiPencilAlt className="text-2xl cursor-pointer text-gray-900" />
//                 </Link>

//               </div>

//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "../comp/RemoveBtn";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function TopicsList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const bloodSearch = searchParams.get("blood") || "";

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  // login states
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // check login token
  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");

    if (token === "verified_admin") {
      setIsVerified(true);
    }
  }, []);

  // fetch data
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();

        setTopics(data.topics);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (isVerified) {
      fetchTopics();
    }
  }, [isVerified]);

  // login
  const handlePassword = async (e) => {
    e.preventDefault();

    setError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem("admin_token", "verified_admin");

        setIsVerified(true);

        setPassword("");
      } else {
        setError("Wrong Password");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoginLoading(false);
    }
  };

  // logout
  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");

    setIsVerified(false);

    router.push("/");
  };

  // search filter
  const filteredTopics = topics.filter((topic) =>
    topic.bloodType.toLowerCase().includes(bloodSearch.toLowerCase())
  );

  // LOGIN PAGE
  if (!isVerified) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-cyan-100 to-blue-200 p-4">
        <form
          onSubmit={handlePassword}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-center text-cyan-600 mb-6">
            Admin Login
          </h1>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-cyan-400 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
            required
          />

          {error && (
            <p className="text-red-500 mt-3 text-center font-semibold">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loginLoading}
            className="w-full mt-5 bg-cyan-500 text-white py-3 rounded-xl font-bold hover:bg-cyan-600 transition-all disabled:opacity-50"
          >
            {loginLoading ? "Checking..." : "Verify"}
          </button>
        </form>
      </div>
    );
  }

  // MAIN PAGE
  return (
    <>
      {/* Top */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6 mb-6 justify-center items-center px-4">
        {/* Search */}
        <form className="flex gap-3 w-full max-w-2xl">
          <input
            type="text"
            name="blood"
            placeholder="Search blood group..."
            defaultValue={bloodSearch}
            className="text-black border-2 border-cyan-500 px-6 py-3 w-full rounded-xl outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
          />

          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-cyan-600 transition-all"
          >
            Search
          </button>
        </form>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 mb-2 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>

      {/* Topics */}
      <div className="w-full  mx-auto px-4 grid gap-5">
        {loading ? (
          <p className="text-center text-2xl font-bold">Loading...</p>
        ) : filteredTopics.length === 0 ? (
          <p className="text-center text-2xl font-bold text-gray-500">
            No donors found
          </p>
        ) : (
          
          
          
          
          
        

  filteredTopics.map((topic) => (

            <div
              key={topic._id}
              className="flex gap-3 mb-2  bg-cyan-500 shadow-md w-full p-4 rounded-lg items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <p className="font-bold text-gray-800">
                Name: {topic.name}
              </p>

              <p className="font-bold text-white">
                Blood Group: {topic.bloodType}
              </p>

              <p className="font-bold text-gray-800">
                Mobile: {topic.mobile}
              </p>

              <p className="text-gray-800">
                {topic.email}
              </p>

              <p className="text-gray-800">
                Address: {topic.address}
              </p>
               <p className="text-gray-800">
                Message: {topic.message}
              </p>

              <div className="flex gap-3 items-center">

                <div className="hover:scale-110 transition-transform">
                  <RemoveBtn id={topic._id} />
                </div>

                <Link
                  href={`/editTopic/${topic._id}`}
                  className="hover:scale-110 transition-transform active:rotate-12"
                >
                  <HiPencilAlt className="text-2xl cursor-pointer text-gray-900" />
                </Link>

              </div>

            </div>
          ))
        )}
      </div>
    </>
  );
}

