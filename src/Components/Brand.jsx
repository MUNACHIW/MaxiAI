// Brand.js
import React from 'react';
import Marquee from 'react-fast-marquee'; // Import the marquee component

import Nike from '/src/assets/Nike.svg';
import Amazon from '/src/assets/Amazon.svg';
import Caltech from '/src/assets/Caltech.svg';
import Frame from '/src/assets/Frame.svg'
import Disney from '/src/assets/Disney.svg'
import princeton from '/src/assets/Princeton-University.svg'
import melbourne from '/src/assets/University-of-Melbourne.svg'
import pelvia from '/src/assets/University-of-Pennsylvania.svg'
import uber from '/src/assets/Uber.svg'
// ... Add other SVG imports for Disney, Princeton, Melbourne, Pelvia, and Uber

function Brand() {
  const brands = [Nike, Amazon, Caltech , Frame, Disney, princeton, melbourne, pelvia, uber]; // Add other SVGs to this array

  return (
    <div className="marquee-container" >
      <Marquee direction="left" speed={40}>
        {brands.map((brand, index) => (
          <img key={index} src={brand} alt={`Brand ${index}`} />
        ))}
      </Marquee>
    </div>
  );
}

export default Brand;
