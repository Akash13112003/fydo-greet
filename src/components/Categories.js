import React from 'react';
import MusicImage from '../assets/music.jpg';

const Categories = () => {
    return (
        <div className="max-w-full mx-4 mt-8  flex flex-wrap justify-between">
            {categories.map((category, index) => (
                <div key={index} className="category-card w-full sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/5 bg-red rounded-md overflow-hidden hover:shadow-lg transition duration-300 mb-4 mx-1">
                    <img src={MusicImage} alt={category.name} className="w-full h-32 object-cover" />
                    <h3 className="text-lg font-bold p-4 text-center">{category.name}</h3>
                </div>
            ))}
        </div>
    );
};

const categories = [
    {
        name: 'Wedding',
    },
    {
        name: 'Music',
    },
    {
        name: 'Cinema',
    },
    {
        name: 'Sports',
    },
];

export default Categories;
