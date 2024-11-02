import React from 'react';

function Campuss() {
  return (
    <div>
      <h1>Campus Video</h1>
      <video width="500" controls>
        <source src="/Campuss" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Campuss;
