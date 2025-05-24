import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export default function Profile() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/login");
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const logoutHandler = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
            navigate("/");
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    if (loading) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
                    <button
                        onClick={logoutHandler}
                        className="text-red-600  cursor-pointer hover:text-red-800 font-medium"
                    >
                        Logout
                    </button>
                </div>

                <div className="p-6 flex flex-col md:flex-row md:items-start md:space-x-6">
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                        <div className="relative w-24 h-24">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                                        alt="User avatar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <h3 className="text-lg font-semibold text-gray-900">Gajendra NIT Raipur</h3>
                        <p className="text-sm text-gray-600 mb-4">gNITRR@gmail.Com</p>
                        <p className="text-sm text-gray-700 max-w-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sed, odio vero a harum nihil accusantium ut eum reiciendis cumque tempore sunt hic deleniti illo. Ipsa architecto delectus accusamus? Quia?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
