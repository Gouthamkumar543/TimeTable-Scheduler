import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const Dashboard = () => {
    const [events, setEvents] = useState([
        { title: "Works", start: new Date() },
        { title: "Birthday", start: new Date(2025, 3, 5, 9, 0), end: new Date(2025, 3, 5, 17, 0) }
    ]);

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [showForm, setShowForm] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // Function to add a new event
    const handleAddEvent = () => {
        if (!newEvent.title || !newEvent.start || !newEvent.end) {
            alert("Please fill out all fields!");
            return;
        }

        const startDate = new Date(newEvent.start);
        const endDate = new Date(newEvent.end);

        if (startDate >= endDate) {
            alert("End date must be later than the start date!");
            return;
        }

        const event = { title: newEvent.title, start: startDate, end: endDate };
        setEvents([...events, event]);
        setShowForm(false);
        setNewEvent({ title: "", start: "", end: "" });
    };

    // Cancel event creation
    const handleCancel = () => {
        setShowForm(false);
        setNewEvent({ title: "", start: "", end: "" });
    };

    return (
        <div style={{ padding: "20px" }}>
            <button onClick={() => setShowForm(true)} style={{ marginBottom: "10px", padding: "10px", cursor: "pointer" }}>
                Add Event
            </button>

            {showForm && (
                <div style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", display: "flex", gap: "10px" }}>
                    <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} style={{ padding: "5px" }} />
                    <input type="datetime-local" name="start" value={newEvent.start} onChange={handleChange} style={{ padding: "5px" }} />
                    <input type="datetime-local" name="end" value={newEvent.end} onChange={handleChange} style={{ padding: "5px" }} />
                    <button onClick={handleAddEvent} style={{ padding: "5px 10px", cursor: "pointer" }}>Save</button>
                    <button onClick={handleCancel} style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "#f44336", color: "white", border: "none" }}>Cancel</button>
                </div>
            )}

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                }}
                events={events}
                editable={true}
                selectable={true}
                height="600px"
            />
        </div>
    );
};

export default Dashboard;
