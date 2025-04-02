import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Card_1 = () => {
    const cardData = [
        {
            title: "Smart Scheduling",
            img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/270/387/datas/original.jpg",
            text: "Plan your tasks with ease using scheduling."
        },
        {
            title: "Task Automation",
            img: "https://t3.ftcdn.net/jpg/04/46/95/98/360_F_446959837_ud38y0tq3BLXku5g72xfD4JT087Cz5R7.jpg",
            text: "Let automation handle your daily plans efficiently."
        },
        {
            title: "Productivity Boost",
            img: "https://traqq.com/blog/wp-content/uploads/2022/05/amazing-work-schedule-img.webp",
            text: "Stay on track with a dynamic and organized workflow."
        },
        {
            title: "Time Tracking",
            img: "https://www.ilr.cornell.edu/sites/default/files-d8/styles/large_9_5/public/2022-07/schedule-bigstock-Time-Management-Planning-Even-454834355.jpg?h=57f5fe53&itok=NuSukNVw",
            text: "Monitor your progress with real-time analytics."
        },
        {
            title: "Meeting Planner",
            img: "https://media.istockphoto.com/id/1356810087/photo/event-planners-use-timetables-and-agendas-to-arrange-and-schedule-events-on-the-office-table.jpg?s=612x612&w=0&k=20&c=51skwC7R-OzzpIGjqdFX4bG-b6tywqJ2gDp5YOqUfbM=",
            text: "Schedule meetings effortlessly and never miss an appointment."
        },
        {
            title: "Smart Reminders",
            img: "https://trafft.com/wp-content/uploads/2023/07/effective-scheduling-768x439.jpg",
            text: "Get reminders to keep your day running smoothly."
        }
    ];

    return (
        <div style={{margin:"100px 0px",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"}}>
            {cardData.map((card, index) => (
                <Card key={index} style={{ width: '22rem',padding:"10px",boxShadow:"2px 2px 10px grey" }} id='about'>
                    <Card.Img variant="top" src={card.img} alt={card.title} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Card_1;
