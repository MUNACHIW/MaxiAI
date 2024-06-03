// Filename: App.js
import React, { useState } from 'react';
import video from '/src/assets/QuickTour_ MaxAI.me Use 1-click.mp4'
import ScrollAnimation from 'react-animate-on-scroll';
import Brand from './Brand.jsx';


function ReadMore({ content }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const truncatedContent = content.slice(0, 100); // Display the first 100 characters


  return (
    <div>
      <p className="">
        {showFullContent ? content : truncatedContent}
        {content.length > 100 && (
          <button onClick={toggleContent}>
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
        )}
      </p>
    </div>
  );
}

function AboutMax() {
  const maxAIContent = `Engage in natural, conversational interactions with an AI that understands your queries and provides instant responses. MaxAI is powered by cutting-edge AI models, including GPT-4, Claude 3, and Gemini 1.5, ensuring that it remains at the forefront of AI technology. Whether you’re looking to improve personal productivity or seeking enterprise-grade development tools, MaxAI offers a low-code/no-code platform that enables the creation of autonomous AI agents at scale. With MaxAI, users can quickly unlock the power of generative AI, optimizing agility to meet business needs and transforming raw data into insightful stories. It’s a tool designed for anyone who wants to use AI to solve text and image-based problems efficiently and effectively.`;

  return (
    <>
    <section className="AboutmaxAIsec" id="Maxai">
      <ScrollAnimation  animateIn="fadeIn" className='' >
        <h2>Quick tour on MaxAI</h2>
        <ReadMore content={maxAIContent} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" className=''>
        {/* Embed your video here */}
         <iframe src={video} title="YouTube video" allowFullScreen /> 
      </ScrollAnimation>
    </section>
    <Brand/>
    </>
  );
}

export default AboutMax;


