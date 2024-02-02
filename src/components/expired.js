import React from 'react';
import Music from '../assets/music.jpg';

function ExpiredEventComponent() {
    return (
        <div className="mt-8 border p-4">
            <div className="heading-content flex flex-col justify-start items-start">
                <h1 className="text-4xl font-bold">Expired events</h1>
                <p className="text-gray-600">Explore Missed Events !</p>
            </div>
            <div className="flex justify-center items-center space-x-8 mt-4">
                <div className="expired-event-item">
                    <img src={Music} alt='Music' className="w-full h-32 object-cover grayscale border border-black" />
                    <div className="text-black text-center">
                        <h4 className="text-lg font-bold">Open Mic - Nitin choudhary 1</h4>
                        <p>Friday, Feb 23 . 7:30 pm</p>
                    </div>
                </div>
                <div className="expired-event-item">
                    <img src={Music} alt='Music' className="w-full h-32 object-cover grayscale border border-black" />
                    <div className="text-black text-center">
                        <h4 className="text-lg font-bold">Open Mic - Nitin choudhary 2</h4>
                        <p>Friday, Feb 24 . 7:30 pm</p>
                    </div>
                </div>
                <div className="expired-event-item">
                    <img src={Music} alt='Music' className="w-full h-32 object-cover grayscale border border-black" />
                    <div className="text-black text-center">
                        <h4 className="text-lg font-bold">Open Mic - Nitin choudhary 3</h4>
                        <p>Friday, Feb 25 . 7:30 pm</p>
                    </div>
                </div>
                <div className="expired-event-item">
                    <img src={Music} alt='Music' className="w-full h-32 object-cover grayscale border border-black" />
                    <div className="text-black text-center">
                        <h4 className="text-lg font-bold">Open Mic - Nitin choudhary 3</h4>
                        <p>Friday, Feb 25 . 7:30 pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpiredEventComponent;
