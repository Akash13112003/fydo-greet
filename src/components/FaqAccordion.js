import React, { useState } from 'react';

const FaqAccordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-3xl font-bold mt-8 mb-4">Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="bg-gray-100 p-4 cursor-pointer border rounded-md"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-lg">{faq.question}</p>
                            <svg
                                className={`w-5 h-5 transition-transform transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                    {activeIndex === index && (
                        <div className="mt-2 bg-white p-4 border rounded-md">
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
