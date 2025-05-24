import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase/Firebase";

export default function Signup() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [agency, setAgency] = useState("no");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const data = { fullName, phone, email, password, company, agency };
        console.log("Signup form data:", data);

        try {
            const userCred = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            navigate("/");
        } catch (err) {
            console.error("Signup error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
            style={{
                backgroundImage:
                    "url(https://static.vecteezy.com/system/resources/previews/008/254/022/non_2x/paper-cut-purple-overlap-layer-on-crumpled-fabric-background-illustration-vector.jpg)",
            }}
        >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                    Create your <br />
                    PopX account
                </h2>

                {error && (
                    <p className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
                        {error}
                    </p>
                )}

                <form className="space-y-5" onSubmit={submitHandler}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter Name"
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Phone Number"
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Email address<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                            required
                        />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Company name
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Enter Company Name"
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                        />
                    </div>

                    {/* Agency Radio */}
                    <div>
                        <span className="block text-purple-600 font-medium mb-1">
                            Are you an Agency?<span className="text-red-500">*</span>
                        </span>
                        <div className="flex items-center space-x-6">
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    checked={agency === "yes"}
                                    onChange={() => setAgency("yes")}
                                    className="accent-purple-600"
                                />
                                <span className="text-gray-700">Yes</span>
                            </label>
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={agency === "no"}
                                    onChange={() => setAgency("no")}
                                    className="accent-purple-600"
                                />
                                <span className="text-gray-700">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 text-white font-semibold rounded-full shadow transition duration-200 cursor-pointer ${loading
                            ? "bg-purple-400 cursor-not-allowed"
                            : "bg-purple-600 hover:bg-purple-700"
                            }`}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </button>
                    <p className="mt-4 text-center text-gray-600">
                        Already a User?{" "}
                        <a href="/login" className="text-purple-600 hover:underline cursor-pointer">
                            Log in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
