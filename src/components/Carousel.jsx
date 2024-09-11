import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselPanel from './CarouselPanel';
import styles from '../styles/Carousel.module.css';

import Coding from '../assets/Coding.png';
//import Landscape from '../assets/WeightedOverlay.PNG';
import Landscape from '../assets/Landscape_crop.jpg';
import Neon from '../assets/Neon_crop.JPG';

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
    // handle clicking between carousel panels...
    if(e.target.id === "carousel"){
      return
    }

    const elmt = e.target.parentNode.id
    const carousel = e.target.parentNode.className
    
    if(document.getElementById(elmt).status === "open"){
      const path = document.getElementById(elmt).children[1].children[0].innerText;
      switch(path){
        case "/comp_sci":
          navigate("/compsci/0");
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          break;
        case "/landscape":
          navigate("/landscape/0");
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          break;
          case "/hobbies":
            navigate("/hobbies");
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            break;
        default:
          console.log(`Implement navigation to ${path} here...`);
          for (let i=0; i < document.getElementsByClassName(carousel).length; i++){
            //console.log("Carousel Loop: ",i)
            document.getElementsByClassName(carousel)[i].style.width = "32%";
            document.getElementsByClassName(carousel)[i].status = "closed";
          }
      }

      
    } else {
      for (let i=0; i < document.getElementsByClassName(carousel).length; i++){
        //console.log("Carousel Loop: ",i)
        document.getElementsByClassName(carousel)[i].style.width = "22%";
        document.getElementsByClassName(carousel)[i].status = "closed";
      }
      
      document.getElementById(elmt).style.width = "52%";
      document.getElementById(elmt).status = "open"
    }
  };

  return(
    <section id="carousel" className={styles.carousel} onClick={handleClick}>
      {carouselImages.map((image, index) => (
        <CarouselPanel key={index} src={image.src} alt={image.alt} count={image.idx}/>
      ))}
    </section>
  )
};

export default Carousel;