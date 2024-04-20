// Event.js
import React from 'react';
import './App.css'; // Import styly

const Event = ({ event, onDelete }) => {
  const handleDelete = () => {
    onDelete(event);
  };

  return (
    <div className="event-card">
      <h3 className="event-title">{event.title}</h3>
      <p className="event-date">{event.date}</p>
      <p className="event-time">{event.time}</p>
      <p className="event-description">{event.description}</p>
      <button onClick={handleDelete}>Smazat</button>
    </div>
  );
};

export default Event;
