import {React,useState} from 'react';
import styles from '../styles/Header.module.css';
import MenuLogo from '../assets/menu_logo.svg';

const HeaderNew = () => {
    const [expand,setExpand] = useState(false)

    
    var isPointerEventInsideElement = function (event, element) {
        var pos = {
            x: event.targetTouches ? event.targetTouches[0].clientX : event.clientX,
            y: event.targetTouches ? event.targetTouches[0].clientY : event.clientY
        };
        var rect = element.getBoundingClientRect();
        return  pos.x < rect.right && pos.x > rect.left && pos.y < rect.bottom && pos.y > rect.top;
    };

    document.querySelector("#root").addEventListener('click', function (event) {
        //console.log("Click on menu...")
        //console.log(isPointerEventInsideElement(event, document.querySelector('#click_header')))
        if(!isPointerEventInsideElement(event, document.querySelector('#click_header'))){
            document.getElementById("menu_icon").style.transform = "none";
            document.getElementById("menu_popup").style.display = "none";
            setExpand(false);
        } 
    });
    
    

    const handleClick = (e) => {
        if(!expand){
            document.getElementById("menu_icon").style.transform = "rotate(90deg)";
            document.getElementById("menu_popup").style.display = "flex";
            setExpand(true);
        } else {
            document.getElementById("menu_icon").style.transform = "none";
            document.getElementById("menu_popup").style.display = "none";
            setExpand(false);
        };
    };

    const handleMenuClick = (e) => {
        console.log(`Implement navigate to: /${e.target.id}`);
    };

    return (
        <>
        <div id="menu_popup" className={styles.popup} onClick={handleMenuClick}>
            <div id="comp_sci" className={styles.menuItem}>
                <p>computer science</p>
            </div>
            <div id="landscape" className={styles.menuItem}>
                <p id>landscape arch</p>
            </div>
            <div id="photography" className={styles.menuItem}>
                <p>photography</p>
            </div>
            <div id="artwork" className={styles.menuItem}>
                <p>artwork</p>
            </div>
        </div>
        <header id="click_header" className={styles.header}>
            <div className={styles.container}>
                <h2>cameron braatz</h2>
                <img 
                    src={MenuLogo}
                    alt=""
                    id="menu_icon"
                    className={styles.icon}           
                    loading="lazy"
                    onClick={handleClick}
                />
            </div>
        </header>
        </>
    );
};

export default HeaderNew;