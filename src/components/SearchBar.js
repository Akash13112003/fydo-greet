import React, { useState, useEffect } from 'react';

const SearchBar = () => {
    const [showAnimatedText, setShowAnimatedText] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAnimatedText(prevState => !prevState);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (<>
        {showAnimatedText && (
            <h2 className="text-2xl font-bold text-red-500 mb-4 animate-pulse mx-auto">
                Search Events
            </h2>
        )}
        <div className="max-w-full mx-4 mt-8 p-4 border border-red-500">

            <div className="flex items-center border-b border-red-500">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow py-2 px-3 bg-transparent focus:outline-none"
                    style={{ minHeight: '30px', maxHeight: '40px' }}
                />
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
                >
                    Search
                </button>
            </div>
        </div>
    </>
    );
};

export default SearchBar;
