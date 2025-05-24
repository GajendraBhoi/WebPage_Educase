import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo({ className }) {
    const navigate = useNavigate();
    return (
        <img
            src="https://images.seeklogo.com/logo-png/34/1/purple-logo-png_seeklogo-340331.png"
            alt="PopX Logo"
            className="w-full h-full cursor-pointer"
            onClick={() => navigate('/')}
            draggable="false"
        />
    );
}
