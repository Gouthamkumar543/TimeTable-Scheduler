import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"
import { Authentication, DataBase } from "../FireBase/FireBase";
import { set, get, ref, remove } from "firebase/database";
import { useEffect } from "react";

const Dashboard = () => {

    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false)
    const [editing, setEditing] = useState(false)
    const [toolBar,setToolBar] = useState({
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
    })
    const [calendarView, setCalendarView] = useState("dayGridMonth");

    const { title, start, end } = newEvent

    const loc = useLocation()
    const loggedin = loc.state?.PersonData?.name || "defaultUser";

    const Navigate = useNavigate()

    useEffect(() => {
        const GetData = async () => {
            try {
                const allData = await get(ref(DataBase, `Data/Users/${loggedin}/data`));
                if (allData.exists()) {
                    setEvents(Object.values(allData.val()));
                } else {
                    console.log("No events found");
                    setEvents([]);
                }
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };

        GetData();

        const handleResize = () => {
            if (window.innerWidth < 400) {
                setCalendarView("listWeek"); // Use compact list view for extra small screens
                setToolBar  ({
                    left: "prev,next today",
                    right: "dayGridMonth,timeGridWeek,listWeek",
                });
            } else if(Window.innerWidth >400) {
                setCalendarView("dayGridMonth");
                setToolBar({
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [loggedin]);

    const Handle_Form_Change = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const Handle_New_Event_Submit = async (x) => {
        x.preventDefault()

        const startDate = new Date(newEvent.start);
        const endDate = new Date(newEvent.end);

        if (startDate >= endDate) {
            setShowError(true);
            return;
        }

        const eventId = newEvent.id || Date.now().toString();
        const updatedEvent = { ...newEvent, id: eventId };

        try {
            await set(ref(DataBase, `Data/Users/${loggedin}/data/${eventId}`), updatedEvent);
            setEvents(x => editing ? x.map(e => e.id === eventId ? updatedEvent : e) : [...x, updatedEvent]);
        } catch (err) {
            console.log("Error:", err);
        }

        setShowModal(false);
        setNewEvent({ title: "", start: "", end: "" });
        setEditing(false)
        setShowError(false)
    };

    const Handle_Close_Modal = () => {
        setShowModal(false);
        setNewEvent({ title: "", start: "", end: "" });
        setEditing(false)
        setShowError(false)
    };

    const Handle_Click_Event = (x) => {
        setNewEvent({
            id: x.event.id,
            title: x.event.title,
            start: x.event.start.toISOString().slice(0, 16),
            end: x.event.end.toISOString().slice(0, 16),
        });
        setEditing(true)
        setShowModal(true)
    }

    const Handle_Delete_Event = async () => {
        try {
            await remove(ref(DataBase, `Data/Users/${loggedin}/data/${newEvent.id}`));
            const allData = await get(ref(DataBase, `Data/Users/${loggedin}/data`));
            if (allData.exists()) {
                setEvents(Object.values(allData.val()));
            } else {
                console.log("No events found");
                setEvents([]);
            }
        } catch (err) {
            console.log("Error deleting event:", err);
        }
        setNewEvent({ title: "", start: "", end: "" })
        setShowModal(false)
        setEditing(false)
    }

    const SignOut = () => {
        signOut(Authentication)
        Navigate("/")
    }

    return (
        <div style={{ padding: "20px" }}>
            <Button onClick={() => setShowModal(true)} style={{ marginBottom: "10px", padding: "10px", cursor: "pointer" }}>Add Event</Button>
            <Button onClick={SignOut} style={{ marginBottom: "10px", padding: "10px", cursor: "pointer" }}>Sign Out</Button>
            {showModal && <Modal show={showModal} onHide={Handle_Close_Modal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Schedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showError && <Alert variant="danger">End date must be later than the start date!</Alert>}
                    <Form onSubmit={Handle_New_Event_Submit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" name='title' placeholder="Enter Title" value={newEvent.title} onChange={Handle_Form_Change} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="datetime-local" name='start' value={newEvent.start} onChange={Handle_Form_Change} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="datetime-local" name='end' value={newEvent.end} onChange={Handle_Form_Change} required autoFocus />
                        </Form.Group>
                        {editing ? <>
                            <Button variant="danger" onClick={Handle_Delete_Event} style={{ margin: "0px 10px" }}> Delete</Button>
                            <Button variant="primary" type="submit">Edit Event</Button></> :
                            <><Button variant="danger" style={{ margin: "0px 10px" }} onClick={Handle_Close_Modal} >Close</Button>
                                <Button variant="primary" type="submit">Add Schedule</Button></>
                        }
                    </Form>
                </Modal.Body>
            </Modal>}

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                initialView={calendarView}
                headerToolbar={toolBar}
                events={events}
                editable={true}
                selectable={true}
                eventClick={Handle_Click_Event}
                height="600px"
            />
        </div>
    );
};

export default Dashboard;