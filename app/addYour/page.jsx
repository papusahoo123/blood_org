 

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddYour() {

    const [name, setName] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [message,setMessage] = useState("")

    // visibility states
    const [showName, setShowName] = useState(true);
    const [showMobile, setShowMobile] = useState(true);
    const [showEmail, setShowEmail] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name,
                    bloodType,
                    mobile,
                    email,
                    address,
                    message,


                    // save visibility options
                    showName,
                    showMobile,
                    showEmail,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to add data");
            }

            alert("Data added successfully");

            router.push("/");

            setName("");
            setBloodType("");
            setMobile("");
            setEmail("");
            setAddress("");
            setMessage("");

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl px-6 py-6 w-full max-w-lg"
            >

                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Add Donor Information
                </h1>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>

                    <input
                        className="shadow border text-black rounded w-full py-2 px-3"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <div className="mt-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showName}
                            onChange={() => setShowName(!showName)}
                        />

                        <label className="text-sm text-black ">
                            Show name publicly
                        </label>
                    </div>
                </div>

                {/* Blood Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Blood Type
                    </label>

                    <input
                        className="shadow border text-black rounded w-full py-2 px-3"
                        type="text"
                        placeholder="Blood Type"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                    />
                </div>

                {/* Mobile */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Mobile Number
                    </label>

                    <input
                        className="shadow border text-black rounded w-full py-2 px-3"
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />

                    <div className="mt-2 flex  items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showMobile}
                            onChange={() => setShowMobile(!showMobile)}
                        />

                        <label className="text-sm text-black text-gray-600">
                            Show mobile publicly
                        </label>
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>

                    <input
                        className="shadow text-black border rounded w-full py-2 px-3"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="mt-2 text-black flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showEmail}
                            onChange={() => setShowEmail(!showEmail)}
                        />

                        <label className="text-sm text-gray-600">
                            Show email publicly
                        </label>
                    </div>
                </div>

                {/* Address */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">
                        Address
                    </label>

                    <input
                        className="shadow border text-black rounded w-full py-2 px-3"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                 {/* message */}
                <div className="mb-7 ">
                    <label className="block text-gray-700 font-bold mb-2">
                         Message
                    </label>

                    <input
                        className="shadow text-black border rounded w-full py-2 px-3 mb-2"
                        type="text"
                        placeholder="Message to public"
                        value={message}
                        onChange={(e) =>  setMessage(e.target.value)}
                    />
                </div>


                <button
                    className="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                    type="submit"
                >
                    Add Your Information
                </button>

            </form>
        </div>
    );
}