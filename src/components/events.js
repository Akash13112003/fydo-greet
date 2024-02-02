import React, { useState } from 'react';
import Music from '../assets/music.jpg';

function EventComponent() {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div className="event-heading flex justify-between items-center p-4">
                <div className="heading-content flex flex-col justify-start items-start">
                    <h1 className="text-4xl font-bold">All events</h1>
                    <p className="text-gray-600">Explore what's going around you</p>
                </div>
                <button
                    className="view-all-button bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handlePopup}
                >
                    View All
                </button>
                {showPopup && (
                    <div className="popup bg-white p-4 shadow-md rounded-md absolute top-12 right-4">
                        <p>Bingo! Enjoy these events near you</p>
                        <button
                            className="bg-gray-500 text-white px-2 py-1 rounded-md mt-2"
                            onClick={handlePopup}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
            <div className="event-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="event-item bg-white p-6 shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={Music} alt='Music' className="event-image mb-4 rounded-md"></img>
                    <div className="item-details text-center">
                        <h4 className="text-xl font-bold mb-2">Open Mic - Nitin Choudhary 1</h4>
                        <p className="text-gray-600 mb-2">Friday, Feb 23 . 7:30 pm</p>
                        <button className="item-button bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Free</button>
                        <button className="item-button-right bg-green-500 text-white px-4 py-2 rounded-md">Register Now</button>
                    </div>
                </div>


                <div className="event-item bg-white p-6 shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={Music} alt='Music' className="event-image mb-4 rounded-md"></img>
                    <div className="item-details text-center">
                        <h4 className="text-xl font-bold mb-2">Open Mic - Nitin Choudhary 2</h4>
                        <p className="text-gray-600 mb-2">Friday, Feb 24 . 7:30 pm</p>
                        <button className="item-button bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Free</button>
                        <button className="item-button-right bg-green-500 text-white px-4 py-2 rounded-md">Register Now</button>
                    </div>
                </div>

                <div className="event-item bg-white p-6 shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={Music} alt='Music' className="event-image mb-4 rounded-md"></img>
                    <div className="item-details text-center">
                        <h4 className="text-xl font-bold mb-2">Open Mic - Nitin Choudhary 3</h4>
                        <p className="text-gray-600 mb-2">Friday, Feb 25 . 7:30 pm</p>
                        <button className="item-button bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Free</button>
                        <button className="item-button-right bg-green-500 text-white px-4 py-2 rounded-md">Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventComponent;
