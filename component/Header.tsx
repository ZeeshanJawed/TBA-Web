'use client'
import Image from "next/image";
import headerImg from './../public/header_img.png';

export default function Header() {
    return (
        // container mx-auto p-6 flex flex-row justify-between items-center
        <div className="flex flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
                <Image src={headerImg} alt="Logo" width={40} height={40} />
                <div className="text-1xl font-bold">Think Bot Agency</div>
            </div>
            <nav className="space-x-6">
                <a href="#" className="hover:text-purple-300">Features</a>
                <a href="#" className="hover:text-purple-300">Pricing</a>
                <a href="#" className="hover:text-purple-300">Blog</a>
                <a href="#" className="hover:text-purple-300">About Us</a>
                <a href="#" className="hover:text-purple-300">Contact</a>
            </nav>
            <button className="bg-button-gradient hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
                Get Started
            </button>
        </div>
    );
}
