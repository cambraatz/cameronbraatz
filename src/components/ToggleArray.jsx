import '../styles/Portfolio.css';
import { useState } from 'react';

const ToggleArray = ({images, defaultIndex}) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const isTouchDevice = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    const toggleImages = (e) => {
        if (!isTouchDevice() && e.type === "click") return;

        const clickedIndex = [...e.currentTarget.children].indexOf(e.target.closest(".toggle-elmt"));
        if (clickedIndex !== -1) {
            setActiveIndex(clickedIndex);
        }      
    };

    return (
        <div className="toggle-cont" onClick={toggleImages}>
            {images.content.map((src,index) => (
                <div 
                    key={index} 
                    className={`toggle-elmt ${index === activeIndex ? "toggle-active" : "toggle-inactive"}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    //onMouseLeave={() => setActiveIndex(0)}
                >
                    <img className="toggle-image" src={src} alt={images.captions[index]} loading="lazy"/>
                </div>
            ))}
        </div>
    );
};

export default ToggleArray;