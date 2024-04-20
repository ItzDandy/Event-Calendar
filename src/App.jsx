// App.js
import React, { useState, useEffect } from 'react';
import EventForm from './EventForm';
import EventList from './ EventList';
import './App.css'; // Import globálních stylů

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  const addEvent = (event) => {
    const newEvents = [...events, event];
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Přidat událost</h2>
        <div className="form-container">
          <EventForm addEvent={addEvent} />
        </div>
      </div>
      <div className="card">
        <h2>Seznam událostí</h2>
        <EventList events={events} onDelete={deleteEvent} />
      </div>
    </div>
  );
};

export default App;
