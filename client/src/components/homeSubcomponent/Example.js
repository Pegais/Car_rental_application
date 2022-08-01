import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./example.css"

const Example = () => {
    const images = [
        "/images/tata.webp",
        "/images/tata2.webp",
        "/images/tata.webp"
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
    );
};

export default Example;