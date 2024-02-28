
import React from 'react';

const Time = ({ year, event }) => {
  return (
    <div  className="timeline-item">
      <div className="timeline-item-content">
        <div className="timeline-item-year">{year}</div>
        <div className="timeline-item-event">{event}</div>
      </div>
    </div>
  );
};

export default Time;
