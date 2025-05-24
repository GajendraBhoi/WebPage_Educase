import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful:", userCred.user);
            navigate("/");
        } catch (err) {
            console.error("Login error:", err);
            setError(err.message);
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
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                    Login
                </h2>

                {error && (
                    <p className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
                        {error}
                    </p>
                )}

                <form className="space-y-5" onSubmit={submitHandler}>
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-purple-600 font-medium mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-full border-2 text-black border-purple-300 focus:border-purple-600 outline-none transition placeholder-gray-300"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-full shadow hover:bg-purple-700 transition duration-200 cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    New here?{" "}
                    <a href="/signup" className="text-purple-600 hover:underline cursor-pointer">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
