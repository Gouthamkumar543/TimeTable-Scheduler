import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousel_1 = () => {
    return (
        <div>
            <Carousel id='home'>
                <Carousel.Item>
                    <img src='https://img.lovepik.com/bg/20240107/3D-Image-of-a-Clock-on-a-Techno-Background-with_2737181_wh1200.jpg' alt='' width={"100%"}  height={"80%"}/>
                    <Carousel.Caption>
                        <h3>Schedule Your Tasks</h3>
                        <p>Let technology help you organize your day automatically.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://img.lovepik.com/bg/20240408/3D-Render-of-a-Cloud-Connected-Cyborg-Hand-Operating-Multimedia_5804689_wh1200.jpg' alt='' width={"100%"}  height={"100%"}/>
                    <Carousel.Caption>
                        <h3>Manage Your Time Easily</h3>
                        <p>Plan your schedule with smart and simple.</p>
                    </Carousel.Caption>
                </Carousel.Item>    
                <Carousel.Item>
                    <img src='https://img.lovepik.com/bg/20240107/Animated-Timetable-with-Transparent-Dome-Clock-Background-for-a-Captivating_2739839_wh1200.jpg' alt='' width={"100%"}  height={"100%"} />
                    <Carousel.Caption>
                        <h3>Keep Your Schedule on Track</h3>
                        <p>Stay on track with easy-to-use scheduling features.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousel_1