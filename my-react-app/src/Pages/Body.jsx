import React from 'react';
import gal from "./../assets/videos/galaxy.mp4";
import "./Body.css";

function Body() {
  return (
    
      <video
        className='back-vid'
        loop
        autoPlay
        muted
        playsInline
        src={gal}
      />
  );
}

export default Body;
