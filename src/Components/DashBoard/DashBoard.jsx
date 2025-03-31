import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal,Form,Button,Alert } from "react-bootstrap";

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [showModal, setShowModal] = useState(false);
    const [showError,setShowError] =useState(false)
    const [editing,setEditing] = useState(false)

    const Handle_Form_Change = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const Hnadle_New_Event_Submit = (x) => {
        x.preventDefault()

        const startDate = new Date(newEvent.start);
        const endDate = new Date(newEvent.end);

        if (startDate >= endDate) {
            setShowError(true)
            return;
        }

        if(editing){
            setEvents(events.map(x=>x.id === newEvent.id ? newEvent : event))
        }else{
            setEvents([...events,{...newEvent,id:Date.now().toString()}])
        }

        setShowModal(false);
        setNewEvent({ title: "", start: "", end: "" });
        setEditing(false)
    };

    const Handle_Close_Modal = () => {
        setShowModal(false);
        setNewEvent({ title: "", start: "", end: "",end:""});
        setEditing(false)
    };

    const Handle_click_event = (x)=>{
        setNewEvent({
            id: x.event.id,
            title: x.event.title,
            start: x.event.start.toISOString().slice(0, 16),
            end: x.event.end.toISOString().slice(0, 16),
        });
        setEditing(true)
        setShowModal(true)
    }

    const Handle_Delete_Event = ()=>{
        setEvents(events.filter(x=>x.id !== newEvent.id))
        setNewEvent({id:"",title:"",start:""})
        setShowModal(false)
        setEditing(false)
    }

    return (
        <div style={{ padding: "20px" }}>
            <Button onClick={() => setShowModal(true)} style={{ marginBottom: "10px", padding: "10px", cursor: "pointer" }}>Add Event</Button>
            {showModal && <Modal show={showModal} onHide={Handle_Close_Modal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Schedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showError && <Alert variant="danger">End date must be later than the start date!</Alert>}
                    <Form onSubmit={Hnadle_New_Event_Submit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" name='title' placeholder="Enter Title" value={newEvent.title} onChange={Handle_Form_Change}  required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="datetime-local" name='start' value={newEvent.start} onChange={Handle_Form_Change} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="datetime-local" name='end' value={newEvent.end} onChange={Handle_Form_Change} required autoFocus />
                        </Form.Group>
                        <Button variant="danger" style={{ margin: "0px 10px" }} onClick={Handle_Close_Modal} >Close</Button>
                        {editing ? <>
                            <Button variant="danger" onClick={Handle_Delete_Event} style={{ margin: "0px 10px" }}> Delete</Button>
                            <Button variant="primary" type="submit"> EditEvent</Button></> : <Button variant="primary" type="submit">Add Schedule</Button>
                        }
                    </Form>
                </Modal.Body>
            </Modal>}

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
                eventClick={Handle_click_event}
                height="600px"
            />
        </div>
    );
};

export default Dashboard;