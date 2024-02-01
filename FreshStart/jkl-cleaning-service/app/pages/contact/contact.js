import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <div className="h-screen flex flex-col items-start">
            <div className="bg-gray-200 p-8 w-full max-w-screen-xl">
                <div className="bg-blue-300 w-2/5 mx-auto p-4">
                    <h2 className="text-black text-center font-bold">Contact Us!</h2>
                    <h3 className="text-black text-center text-lg">Phone Number:</h3>
                    <p className="text-l text-center text-yellow-600 font-bold">(587) 999 9999</p>
                    <h3 className="text-black text-center text-lg">Email:</h3>
                    <p className="text-l text-center text-yellow-600 font-bold">gonsalves.ferdinand@yahoo.com</p>
                    <h3 className="text-black text-center text-lg">FaceBook:</h3>
                    <Link href='https://www.facebook.com/JklCleaningServices/' className="text-l text-center text-yellow-600 font-bold">JKL FaceBook</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;