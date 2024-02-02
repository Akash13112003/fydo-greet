import React from 'react';
import FaqAccordion from './components/FaqAccordion';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import EventComponent from './components/events';
import ExpiredEventComponent from './components/expired';
import Artists from './components/Artists';

const faqs = [
  {
    question: 'What is Tailwind CSS?',
    answer: 'Tailwind CSS is a utility-first CSS framework...',
  },
  {
    question: 'How do I install Tailwind CSS?',
    answer: 'You can install Tailwind CSS using npm or yarn...',
  },
  {
    question: 'What is Tailwind CSS?',
    answer: 'Tailwind CSS is a utility-first CSS framework...',
  },
  {
    question: 'How do I install Tailwind CSS?',
    answer: 'You can install Tailwind CSS using npm or yarn...',
  },
];

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function App() {
  return (
    <div className='App bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-300 min-h-screen'>
      <div className="max-w-screen-xl mx-auto">
        <Carousel className="max-w-screen-sm mx-auto">
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`slide-${index}`} className="mx-auto" />
          ))}
        </Carousel>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <SearchBar />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Categories />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <EventComponent />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ExpiredEventComponent />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Artists />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <FaqAccordion faqs={faqs} />
      </div>
    </div>
  );
}

export default App;
