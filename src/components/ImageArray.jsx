import '../styles/Portfolio.css';
import { useState } from 'react';

const ImageArray = ({images, captions, alt="", tag="", shadow=""}) => {
    //var imageIndex = index;
    const [imageIndex,setImageIndex] = useState(0);

    const handleClick = (e) => {
        if (e.target.classList.contains("left")) {
            if (imageIndex-1 < 0) {
                setImageIndex(2);
            } else { setImageIndex(imageIndex-1); }
        } else {
            setImageIndex((imageIndex+1)%images.length);
        }
    };

    return (
        <div className="arrayBlock">
            <div className="imageArray">
                <p onClick={handleClick} className="leftArrow">&lt;</p>
                <div className="arrayImage">
                    <img className={`imageSwitch ${shadow}`} src={images[imageIndex]} alt={alt} loading="lazy"/>
                </div>
                <p onClick={handleClick} className="rightArrow">&gt;</p>
            </div>
            <div className="arrayCaption">
                <p className="caption"><strong>{captions[imageIndex]}</strong> {tag}</p>
            </div>
        </div>
    );
};

export default ImageArray;