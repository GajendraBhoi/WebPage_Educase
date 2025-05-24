import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#about", label: "About" },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="flex items-center justify-between px-6 py-4 pl-20 pr-20">
                <div className="w-20 h-auto">
                    <Logo className="w-auto" />
                </div>

                <ul className="hidden md:flex items-center space-x-8 text-gray-700">
                    {navItems.map(({ href, label }) => (
                        <li key={href} className="group">
                            <a
                                href={href}
                                className="
                                    relative inline-block
                                    transition-colors duration-200
                                    hover:text-purple-600
                                    after:content-['']
                                    after:absolute after:left-0 after:bottom-0
                                    after:h-0.5 after:w-0
                                    after:bg-purple-600
                                    group-hover:after:w-full
                                    after:transition-all after:duration-300
                                "
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li className="ml-4">
                        <Link to='/profile'>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>

                {/* for  Mobile */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-4 text-gray-700">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="block hover:text-purple-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className="block"
                    >
                        <div className="avatar mt-2">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
}
