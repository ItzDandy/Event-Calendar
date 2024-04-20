// EventList.js
import React from 'react';
import Event from './Event';

const EventList = ({ events, onDelete }) => {
  return (
    <div>
      {events.map((event, index) => (
        <Event key={index} event={event} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EventList;
