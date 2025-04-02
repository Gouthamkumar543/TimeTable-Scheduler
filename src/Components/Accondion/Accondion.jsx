import React from 'react'
import { Accordion } from 'react-bootstrap'

const Accondion_1 = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center",margin:"20px 0"}}>
            <Accordion style={{ width: "80%" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why To Choose Time-Table_Scheduler</Accordion.Header>
                    <Accordion.Body>
                        The Time-Table Scheduler helps you efficiently manage your daily tasks, appointments, and deadlines.
                        With automated scheduling, reminders, and real-time updates, you can focus on productivity without the
                        hassle of manual planning. Whether you're a student, professional, or team leader, our scheduler ensures
                        you stay on track and never miss important events
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>About The Time-Table-Scheduler</Accordion.Header>
                    <Accordion.Body>
                        The Time-Table Scheduler is a smart scheduling tool designed to help individuals and teams organize their time effectively. It offers features like task prioritization, calendar integration to optimize your workflow. Whether you're planning meetings, study sessions, or personal goals, this scheduler
                        adapts to your needs and enhances time management.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Accondion_1