 
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({
    id,
    name: initialName,
    bloodType: initialBloodType,
    mobile: initialMobile,
    email: initialEmail,
    address: initialAddress,
    message: initialMessage,
}) {

    const [name, setName] = useState(initialName || "");
    const [bloodType, setBloodType] = useState(initialBloodType || "");
    const [mobile, setMobile] = useState(initialMobile || "");
    const [email, setEmail] = useState(initialEmail || "");
    const [address, setAddress] = useState(initialAddress || "");
    const [message, setMessage] = useState(initialMessage || "");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch(`/api/topics/${id}`, {
                method: "PUT",
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
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to update data");
            }

            alert("Data updated successfully");

            router.push("/");

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
            >

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="bloodType"
                    >
                        Blood Type
                    </label>

                    <input
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="bloodType"
                        type="text"
                        placeholder="Blood Type"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="mobile"
                    >
                        Mobile Number
                    </label>

                    <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="mobile"
                        type="tel"
                        placeholder="Mobile Number"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="address"
                    >
                        Address
                    </label>

                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="address"
                        type="text"
                        placeholder="Address"
                    />
                </div>

                  <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                    >
                         Message
                    </label>

                    <input
                        value={message}
                        onChange={(e) =>  setMessage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="message"
                        type="text"
                        placeholder="Message"
                    />
                </div>


                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    UPDATE Your Information
                </button>

            </form>
        </div>
    );
}