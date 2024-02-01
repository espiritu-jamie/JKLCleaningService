import React from "react";

const About = () => {
    return (
        <div className="h-screen flex flex-col items-start">
            <div className="bg-gray-200 p-8 w-full max-w-screen-xl" style={{ backgroundImage: 'url("Cleaning1.ico")'}}>
                <div className="bg-blue-300 w-2/5 mx-auto p-4">
                    <div>
                        <h2 className="text-black text-center font-bold">About Us</h2>
                        <p className="text-black text-center text-lg">We are a personalized cleaning service with an eye for detail.</p>
                        <p className="text-black text-center text-lg">We are licensed, insured, and bondable for your peace of mind.</p>
                        <p className="text-black text-center text-lg">Thorough and efficient, we offer with excellent rates and references.</p>
                        <p className="text-black text-center text-lg">All cleaning products and equipment are supplied</p>
                        <p className="text-black text-center text-lg">and we offer environmental friendly options too!</p>
                        <p className="text-yellow-600 text-center text-lg font-bold">We forward to hearing from you!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;