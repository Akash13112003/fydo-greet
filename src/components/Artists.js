import React from 'react';
import ArtistImage from '../assets/artists.jpg';

const Artists = () => {
    return (
        <div className="max-w-full mx-4 mt-8">
            <div className="heading-content flex flex-col justify-start items-start">
                <h1 className="text-4xl font-bold">Artist</h1>
                <p className="text-gray-600">Meet the Magicians!</p>
            </div>
            <br></br>
            <div className="flex flex-wrap justify-between">
                {artists.map((artist, index) => (
                    <div key={index} className="category-card w-full sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/5 bg-blue rounded-md overflow-hidden hover:shadow-lg transition duration-300 mb-4 mx-1">
                        <img src={ArtistImage} alt={artist.name} className="w-full h-32 object-cover rounded-full" />
                        <h3 className="text-lg font-bold p-4 text-center">{artist.name}</h3>
                        <p className="text-gray-600 p-4 text-center">{artist.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const artists = [
    {
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus turpis nec justo commodo, et aliquet ex cursus.',
    },
    {
        name: 'Jane Smith',
        description: 'Vivamus eget leo sit amet libero venenatis vehicula. Integer auctor fermentum purus, ut interdum justo. ',
    },
    {
        name: 'Alex Johnson',
        description: 'Nullam vel purus nec est hendrerit suscipit. Fusce elementum sapien nec tellus congue, nec aliquam arcu scelerisque.',
    },
    {
        name: 'Emily Brown',
        description: 'Proin euismod, quam id tempor venenatis, elit odio tristique purus, eu aliquam nisi urna vel mi. ',
    },
];

export default Artists;
