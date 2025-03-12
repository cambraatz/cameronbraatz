import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselPanel from './CarouselPanel';
import '../styles/Carousel.css';

import Coding from '../assets/compsci/compSciThumb1.png';
//import Coding from '../assets/Coding.png';
import Landscape from '../assets/CityGarden.jpg';
//import Landscape from '../assets/Landscape_crop.jpg';
//import Neon from '../assets/Neon_crop.JPG';
import Neon from '../assets/artwork/Rainbow.JPG';

const Carousel = () => {
  const navigate = useNavigate();

  const carouselImages = [
    { src: Coding, 
      alt: "/comp_sci", 
      verbose: "collection of computer science and software development projects", 
      idx: 0 },
    { src: Landscape, 
      alt: "/landscape", 
      verbose: "collection of landscape architecture and design projects",
      idx: 1 },
    { src: Neon, 
      alt: "/hobbies",
      verbose: "collection of artwork and photography for academic and personal projects", 
      idx: 2 }
  ];
  
  const handleClick = (e) => {
    const carousel = document.getElementById("carousel");
    //console.log("carousel: ", carousel); // carousel...
    //console.log("e.target.parentElement: ", e.target.parentElement); // clicked panel...

    if (!carousel.contains(e.target)) {
      //console.log("Clicked outside carousel, resetting panels...")
      for (let child of carousel.children) {
        child.classList.add("default");
        child.classList.remove("wide","skinny");
      }
      return;
    }

    const panel = e.target.closest(".panel"); // grab nearest panel...
    if (!panel) { 
      console.log("no panel grabbed...")
      return;
    }
    
    // if panel is active, navigate to portfolio page...
    if(panel.classList.contains("wide")){
      const path = panel.querySelector("h5").innerText;
      switch(path){
        case "/comp_sci":
          navigate("/compsci/0");
          break;
        case "/landscape":
          navigate("/landscape/0");
          break;
          case "/hobbies":
            navigate("/hobbies");
            break;
        default:
          break;
      }
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else {
      for (let child of carousel.children) {
        if (child === panel) {
          child.classList.add("wide");
          child.classList.remove("skinny", "default");
        } else {
          child.classList.add("skinny");
          child.classList.remove("wide","default");
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return(
    <section id="carousel" className="carousel">
      {carouselImages.map((image, index) => (
        <CarouselPanel key={index} count={index} src={image.src} alt={image.alt}/>
      ))}
    </section>
  )
};

export default Carousel;