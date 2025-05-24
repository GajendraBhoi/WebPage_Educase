import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export default function HomePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    return (
        <div className="flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden">
                <img
                    src="https://yellowcherry.uk/wp-content/uploads/2022/05/website-design-animation-scene-2023-11-27-05-26-42-utc1.gif"
                    alt="img"
                    className="p-9 w-full h-full object-cover"
                    draggable="false"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-16">
                <div className="w-full max-w-lg mx-auto text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                        Welcome to PopX
                    </h1>
                    <p className="text-gray-600 mb-8 text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    {!user && (
                        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-end gap-4">
                            <Link to="/signup" className="w-full sm:w-1/2 md:w-full">
                                <button className="w-full bg-purple-600 cursor-pointer text-white font-semibold py-3 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300 ease-in-out ">
                                    Create Account
                                </button>
                            </Link>

                            <Link to="/login" className="w-full sm:w-1/2 md:w-full">
                                <button className="w-full bg-purple-100  cursor-pointer text-purple-800 font-semibold py-3 rounded-full shadow-lg hover:bg-purple-200 hover:shadow-xl transition duration-300 ease-in-out">
                                    Already Registered? Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
